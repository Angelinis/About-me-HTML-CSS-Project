AFRAME.registerComponent('mouse-manipulation', {

    schema: {
        debug: {type: 'boolean', default: false},
        showHints: {type: 'boolean', default: true},
    },

    events: {
        mousedown: function(evt) { this.mouseDown(evt) }, 
        mouseup:  function(evt) { this.mouseUp(evt) },
        mouseenter: function(evt) { this.mouseEnter(evt) }, 
        mouseleave:  function(evt) { this.mouseLeave(evt) }
    },
    
    init() {
         const rig = document.getElementById("rig");

        if (!rig) {
            console.log("Rig not found, retrying...");
            setTimeout(() => { this.init(); }, 5000); 
            return;
        }

        console.log("Rig found! Initializing mouse manipulation.");


        // cursor must have an ID so that we can refence it when attaching an object-parent
        console.assert(this.el.id)
    
        this.moveSpeed = 3;
        this.grabbedEl = null;

        // Current active contact point (cursor or camera)
        this.activeContactPoint = null; 

        this.camera = document.querySelector('[camera]');
        this.cursorTracker = document.createElement('a-entity');
        this.cursorTracker.setAttribute('cursor-tracker', `cursor:#${this.el.id}`);
        this.camera.appendChild(this.cursorTracker);

        // Cursor Contact Point
        this.cursorContactPoint = document.createElement('a-entity');
        this.cursorContactPoint.setAttribute('id', `${this.el.id}-cursor-contact-point`);
        if (this.data.debug) {
            this.cursorContactPoint.setAttribute('geometry', "primitive:box; height:0.1; width: 0.1; depth:0.1");
            this.cursorContactPoint.setAttribute('material', "color: blue");
        }
        this.cursorTracker.appendChild(this.cursorContactPoint);

        // Camera Contact Point
        this.cameraContactPoint = document.createElement('a-entity');
        this.cameraContactPoint.setAttribute('id', `${this.el.id}-camera-contact-point`);
        if (this.data.debug) {
            this.cameraContactPoint.setAttribute('geometry', "primitive:box; height:0.1; width: 0.1; depth:0.1");
            this.cameraContactPoint.setAttribute('material', "color: red");
        }
        this.camera.appendChild(this.cameraContactPoint);

        this.windowMouseUp = this.windowMouseUp.bind(this);
        this.windowMouseDown = this.windowMouseDown.bind(this);

        window.addEventListener('mouseup', this.windowMouseUp);
        window.addEventListener('mousedown', this.windowMouseDown);
        window.addEventListener('contextmenu', event => event.preventDefault());

        this.lbDown = false;
        this.mbDown = false;
        this.rbDown = false;
        
        // Helpers for tick
        this.worldPos = new THREE.Vector3();
        this.worldQuat = new THREE.Quaternion();
    },

    // NEW: The tick function handles the movement every frame without re-parenting
tick() {
        if (this.grabbedEl && this.activeContactPoint) {
            
            // 1. POSITION
            // Get the world position of the contact point
            this.activeContactPoint.object3D.getWorldPosition(this.worldPos);
            
            // Set the grabbed element's local position to the world position first
            this.grabbedEl.object3D.position.copy(this.worldPos);
            
            // Convert that world position into local coordinates relative to the object's parent
            this.grabbedEl.object3D.parent.worldToLocal(this.grabbedEl.object3D.position);
            
            // 2. ROTATION
            // Get the world rotation of the contact point
            this.activeContactPoint.object3D.getWorldQuaternion(this.worldQuat);

            // Calculate the parent's world rotation (inverse)
            // We need a temporary quaternion for this calculation to avoid messing up other variables
            if (!this.parentWorldQuat) this.parentWorldQuat = new THREE.Quaternion();
            
            this.grabbedEl.object3D.parent.getWorldQuaternion(this.parentWorldQuat);
            this.parentWorldQuat.invert();

            // Multiply: (ParentInverse * TargetWorld) = TargetLocal
            this.parentWorldQuat.multiply(this.worldQuat);
            
            // Apply the result to the object's local quaternion
            this.grabbedEl.object3D.quaternion.copy(this.parentWorldQuat);
        }
    },

    update: function() {
        if (this.data.showHints) { this.createHints(); }
        else { this.removeHints(); }
    },

    remove() {
        this.removeHints();
        if(this.cursorTracker && this.cursorTracker.parentNode) this.cursorTracker.parentNode.removeChild(this.cursorTracker);
        if(this.cameraContactPoint && this.cameraContactPoint.parentNode) this.cameraContactPoint.parentNode.removeChild(this.cameraContactPoint);
        window.removeEventListener('mouseup', this.windowMouseUp);
        window.removeEventListener('mousedown', this.windowMouseDown);
    },

    windowMouseDown(evt) {
        if (evt.buttons === undefined) return;
        if (!this.grabbedEl) return;

        this.recordMouseButtonsState(evt);
        this.updateMouseControls();
        this.updateHints();

        // TAKE OWNERSHIP HERE
        if (this.grabbedEl.components.ownership){
            this.grabbedEl.components.ownership.setOwner();
        }

        if (this.lbDown) {
            // Setup alignment
            this.setupContactPoint(this.cursorContactPoint);
        } else {
            // Setup alignment
            this.setupContactPoint(this.cameraContactPoint);
        }
    },

    windowMouseUp(evt) {
        if (evt.buttons === undefined) return;
        if (!this.grabbedEl) return;

        this.recordMouseButtonsState(evt);
        this.updateMouseControls();
        this.updateHints();
        
        if (this.lbDown) {
            // Left button still down, do nothing
        }
        else if (evt.buttons === 0){
            // Release
            if (this.grabbedEl.components.ownership) {
                this.grabbedEl.components.ownership.clearOwner();
            }
            this.releaseEl();
        }
        else if (evt.button === 0) {
            // Swapping from Left click to Right/Middle hold
            this.setupContactPoint(this.cameraContactPoint);
        }
    },

    recordMouseButtonsState(evt) {
        this.lbDown = (evt.buttons & 1);
        this.mbDown = (evt.buttons & 4);
        this.rbDown = (evt.buttons & 2);
    },

    updateMouseControls() {
        // Logic remains mostly the same, but we attach controls to the active contact point
        // Note: The logic in your original script added attributes to contact points. 
        // This is fine, as long as the contact points move, the 'tick' function will follow them.

        if (this.lbDown) {
            this.cursorContactPoint.setAttribute("mouse-dolly", "");
        } else if (this.rbDown){
            this.cursorContactPoint.removeAttribute("mouse-dolly");
            this.cameraContactPoint.setAttribute("mouse-dolly", "");
        } else {
            this.cursorContactPoint.removeAttribute("mouse-dolly");
            this.cameraContactPoint.removeAttribute("mouse-dolly");
        }

        if (this.rbDown) {
            this.cameraContactPoint.setAttribute("mouse-pitch-yaw", "");
        } else {
            this.cameraContactPoint.removeAttribute("mouse-pitch-yaw");
        }

        if (this.mbDown) {
            this.cameraContactPoint.setAttribute("mouse-roll", "");
        } else {
            this.cameraContactPoint.removeAttribute("mouse-roll");
        }
    },

    // ... createHints, updateHints, removeHints (Keep as is) ...
    createHints() {
        if (!this.data.showHints) return;
        this.hints = document.createElement('a-entity');
        this.hints.setAttribute("label", "overwrite: true; forceDesktopMode: true");
        this.hints.setAttribute("mouse-manipulation-hints", "");
        this.el.appendChild(this.hints);
        this.updateHints();
    },

    updateHints() {
        if (!this.data.showHints) return;
        const show = (x) => { this.hints.setAttribute("mouse-manipulation-hints", "view", x) };
        if (this.lbDown) show("left");
        else if (this.rbDown) show("right");
        else if (this.mbDown) show("middle");
        else if (this.hoverEl) show("hover");
        else show("none");
    },

    removeHints() {
        if (this.hints) {
            this.hints.parentNode.removeChild(this.hints);
            this.hints = null;
        }
    },

    mouseDown(evt) {
    const intersections = this.getIntersections(evt.target);
    if (intersections.length === 0) return;

    const element = intersections[0];
    const target = this.getRaycastTarget(element);

    // Only allow grabbing of movable objects
    if (!target.classList.contains('movable')) return;

    this.grabbedEl = target;
},


    // REPLACED grabElToContactPoint
    setupContactPoint(contactPoint) {
        if (this.grabbedEl.components.animation) {
        this.grabbedEl.components.animation.pause(); // stops the A-Frame animation
        }

        this.activeContactPoint = contactPoint;

        // Move the contact point to match the grabbed object's current position
        // so it doesn't snap instantly to the camera.
        const objectWorldPos = new THREE.Vector3();
        const objectWorldQuat = new THREE.Quaternion();
        
        this.grabbedEl.object3D.getWorldPosition(objectWorldPos);
        this.grabbedEl.object3D.getWorldQuaternion(objectWorldQuat);

        // Transform world pos to contact point's parent local space
        contactPoint.object3D.parent.worldToLocal(objectWorldPos);
        
        // Set contact point transform
        contactPoint.object3D.position.copy(objectWorldPos);
        // Note: Copying rotation might feel weird if you want the object to look at camera,
        // but for "grabbing as is", we copy the rotation.
        // We need to do some math if we want to copy quaternion to local space of camera, 
        // but for simplicity, we can just reset rotation or keep offset. 
        // For this specific implementation, let's zero the contact point rotation relative to camera
        // or keep previous logic.
        
        // Visual hints
        this.hints.object3D.position.set(0, 0 , 0);
        contactPoint.object3D.add(this.hints.object3D);
    },


    releaseEl() {
        if (!this.grabbedEl) return;


        // Reset state
        this.grabbedEl = null;
        this.activeContactPoint = null;
        
        // Put hints back
        this.el.object3D.add(this.hints.object3D);
        if (this.hoverEl) {
            const pos = this.hints.object3D.position;
            this.hoverEl.object3D.getWorldPosition(pos);
            this.hints.object3D.parent.worldToLocal(pos);
        }
    },

    // ... mouseUp, getRaycastTarget, mouseEnter, mouseLeave, getIntersections ...
    // (Keep these exactly as they were in your original file)
    mouseUp() {},
    getRaycastTarget(el) {
        return el.components['raycast-target'] ? el.components['raycast-target'].target : el;
    },
    mouseEnter(evt) {
        const intersections = this.getIntersections(evt.target);
        if (intersections.length === 0) return;
        const element = intersections[0];
        this.hoverEl = this.getRaycastTarget(element);
        if (this.grabbedEl) return;
        const pos = this.hints.object3D.position;
        this.hoverEl.object3D.getWorldPosition(pos);
        this.hints.object3D.parent.worldToLocal(pos);
        this.updateHints();
    },
    mouseLeave(evt) {
        this.hoverEl = null;
        this.updateHints();
    },
    getIntersections(cursorEl) {
        return cursorEl.components.raycaster.intersectedEls;
    }
});

// ... Keep existing mouse-manipulation-hints, mouse-pitch-yaw, etc ...
AFRAME.registerComponent('mouse-manipulation-hints', {
    schema: {
        view: {type: 'string',
               oneOf: ['none', 'hover', 'left', 'middle', 'right'],
               default: 'none'}
    },

    init() {
        this.views = {}
        const views = this.views

        this.createHoverView()
        this.createLeftView()
        this.createRightView()
        this.createMiddleView()
    },

    createHoverView() {

        const views = this.views
        views.hover = document.createElement('a-entity')
        views.hover.setAttribute('id', 'hint-hover')
        this.el.appendChild(views.hover)

        const rows = [["left-mouse", "move-arrows", "left-mouse", "pitch-yaw-arrow"],
                      ["mouse-wheel", "in-out-arrow", "middle-mouse", "roll"]]

        const rotations = [[0, 0, 0, 0],
                           [0, 0, 0, 0]]
        
        const reflections = [[1, 1, -1, 1],
                             [1, 1, 1, 1]]

        this.addRowsToView(views.hover, rows, rotations, reflections, "above")
    },

    createLeftView() {

        const views = this.views
        views.left = document.createElement('a-entity')
        views.left.setAttribute('id', 'hint-left')
        //views.left.setAttribute("text", "value: left; align: center; anchor: center")        
        this.el.appendChild(views.left)

        const rows = [["mouse-wheel", "in-out-arrow"]]
        const rotations = [[0, 0]]
        const reflections = [[1, 1]]

        this.addRowsToView(views.left, rows, rotations, reflections, "below")

        const cRows = [["left-arrow"],
                       ["left-arrow"],
                       ["left-arrow"],
                       ["left-arrow"]]
        const cRotations = [[270], [90], [0], [180]]
        const cReflections = [[1], [1], [1], [1]]

        this.addRowsToView(views.left, cRows, cRotations, cReflections, "compass")
    },

    createRightView() {

        const views = this.views
        views.right = document.createElement('a-entity')
        views.right.setAttribute('id', 'hint-right')
        this.el.appendChild(views.right)

        const rows = [["mouse-wheel", "in-out-arrow"]]
        const rotations = [[0, 0]]
        const reflections = [[1, 1]]

        this.addRowsToView(views.right, rows, rotations, reflections, "below")

        const cRows = [["yaw-arrow"],
                       ["yaw-arrow"],
                       ["yaw-arrow"],
                       ["yaw-arrow"]]
        const cRotations = [[90], [90], [0], [0]]
        const cReflections = [[1], [-1], [-1], [1]]

        this.addRowsToView(views.right, cRows, cRotations, cReflections, "compass")
    },

    createMiddleView() {

        const views = this.views

        views.middle = document.createElement('a-entity')
        views.middle.setAttribute('id', 'hint-middle')
        this.el.appendChild(views.middle)

        const rows = [["roll"]]
        const aRotations = [[0]]
        const bRotations = [[180]]
        const reflections = [[1]]

        this.addRowsToView(views.middle, rows, aRotations, reflections, "above")
        this.addRowsToView(views.middle, rows, bRotations, reflections, "below")
    },

    addRowsToView(view, rows, rotations, reflections, layout) {

        const spacing = 0.15
        const imgSize = 0.1
        const iconsPath = "https://cdn.jsdelivr.net/gh/diarmidmackenzie/aframe-examples@latest/assets/icons/"

        var xOffset, yOffset
        
        xOffset = -((rows[0].length - 1) * spacing / 2)
        yOffset = 0.2 + rows.length * spacing / 2 
        
        if (layout === "below") {
            yOffset -= 0.5
        }
        
        function createIcon(iconName, xPos, yPos, rotation, reflect) {

            const icon = document.createElement('a-image')
            const src = `${iconsPath}${iconName}.svg`

            icon.setAttribute("src", src)
            icon.object3D.position.set(xPos, yPos, 0)
            icon.object3D.rotation.set(0, 0, THREE.MathUtils.degToRad(rotation))
            icon.object3D.scale.set(imgSize * reflect, imgSize, imgSize)
            view.appendChild(icon)
        }

        function createRow(row, xStart, yPos, rowIndex) {
            return
            // row.forEach((iconName, index) => {
            //     createIcon(iconName, xStart + (index * spacing), yPos,
            //                rotations[rowIndex][index],
            //                reflections[rowIndex][index])
            // })
        }

        if ((layout === "above") ||
            (layout === "below"))
         {
            // lay rows out in a grid above the entity
            rows.forEach((row, index) => {
                createRow(row, xOffset, yOffset - (index * spacing), index)
            })
        }
        else if (layout === "compass") {
            // lay rows out at N, S, E & W positions.
            console.assert(rows.length == 4)

            const radius = 0.4
            
            createRow(rows[0], 0, radius, 0) // N
            createRow(rows[1], 0, -radius, 1) // S
            createRow(rows[2], -radius, 0, 2) // E
            createRow(rows[3], radius, 0, 3) // W

        }
    },

    update() {

        const show = (x) => { x.object3D.visible = true }
        const hide = (x) => { x.object3D.visible = false }

        const views = this.views

        hide(views.hover)
        hide(views.left)
        hide(views.right)
        hide(views.middle)
        
        const viewToShow = views[this.data.view]
        if (viewToShow) {
            show(viewToShow)
        }
    }
})
  
AFRAME.registerComponent('mouse-pitch-yaw', {

    schema: {
        // whether to only allow rotation on a single axis (whichever moves first)
        singleAxis : {type: 'boolean', default: false},
        // Number of mouse pixels movement required to lock onto an axis.
        threshold : {type: 'number', default: 5}
    },

    init: function () {
  
        this.axis = null
        this.cumX = 0
        this.cumY = 0

        this.xQuaternion = new THREE.Quaternion();
        this.yQuaternion = new THREE.Quaternion();
        this.yAxis = new THREE.Vector3(0, 1, 0);
        this.xAxis = new THREE.Vector3(1, 0, 0);
    
        this.onMouseMove = this.onMouseMove.bind(this);
        document.addEventListener('mousemove', this.onMouseMove);
    },


    remove() {
        document.removeEventListener('mousemove', this.onMouseMove);
    },
    
    onMouseMove: function (evt) {
        this.rotateModel(evt);
    },
  
    rotateModel: function (evt) {

        // get normalized vector perpendicular to camera to use as xAxis (to pitch around)
        this.xAxis.copy(this.el.object3D.position)
        this.xAxis.normalize()
        this.xAxis.cross(this.yAxis)
        //console.log("xAxis: ", this.xAxis)

        var dX = evt.movementX;
        var dY = evt.movementY;

        // constrain to single axis if required.
        if (this.data.singleAxis) {

            // cumulative movements in X & Y.  Used to measure vs. threshold for
            // single axis movement.
            this.cumX += dX
            this.cumY += dY

            if (!this.axis && 
                ((Math.abs(this.cumX) > this.data.threshold) ||
                 (Math.abs(this.cumY) > this.data.threshold))) {
                this.axis = (Math.abs(this.cumX) > Math.abs(this.cumY)) ? "x" : "y"
            }

            if (this.axis === "x") {
                dY = 0
            }
            else if (this.axis === "y"){
                dX = 0
            }
            else {
                // if not locked onto an axis yet, don't allow amny movement.
                dX = 0
                dY = 0
            }
        }
    
        this.xQuaternion.setFromAxisAngle(this.yAxis, dX / 200)
        this.yQuaternion.setFromAxisAngle(this.xAxis, dY / 200)
    
        this.el.object3D.quaternion.premultiply(this.xQuaternion);
        this.el.object3D.quaternion.premultiply(this.yQuaternion);

        // avoid issues that can result from accumulation of small Floating Point inaccuracies.
        this.el.object3D.quaternion.normalize()
    }
});

AFRAME.registerComponent('mouse-roll', {

    schema: {
        slowdownRadius: {type: 'number', default: 50}
    },

    init: function () {
  
        this.zQuaternion = new THREE.Quaternion();
        this.zAxis = new THREE.Vector3(0, 0, 1);
    
        this.onMouseMove = this.onMouseMove.bind(this);
        document.addEventListener('mousemove', this.onMouseMove);

        this.currPointer = new THREE.Vector2()
        this.prevPointer = new THREE.Vector2()

        this.el.setAttribute("entity-screen-position", "")

        this.modelPos = new THREE.Vector2()
        this.el.components['entity-screen-position'].getEntityScreenPosition(this.modelPos)
    },
    

    remove() {
        this.el.removeAttribute("entity-screen-position")
        document.removeEventListener('mousemove', this.onMouseMove);
    },
    
    onMouseMove: function (evt) {
        this.rotateModel(evt);
    },
  
    rotateModel: function (evt) {

        // get normalized vector away from camera to use as zAxis (to roll around)
        this.zAxis.copy(this.el.object3D.position)
        this.zAxis.multiplyScalar(-1)
        this.zAxis.normalize()
        //console.log("zAxis: ", this.zAxis)

        this.el.components['entity-screen-position'].getEntityScreenPosition(this.modelPos)
        //console.log("Model position on screen:", this.modelPos)

        const dX = evt.movementX;
        const dY = evt.movementY;
        this.currPointer.set(evt.clientX, evt.clientY)
        this.currPointer.sub(this.modelPos)
        this.prevPointer.set(evt.clientX - dX, evt.clientY - dY)
        this.prevPointer.sub(this.modelPos)

        let angle = this.prevPointer.angle() - this.currPointer.angle()

        // Normalize to rangw PI -> -PI, so that scaling angle down doesn't give unexpected results.
        if (angle < (-Math.PI)) angle += (2 * Math.PI)
        if (angle > (Math.PI)) angle -= (2 * Math.PI)
        
        const distanceToCenter = Math.min(this.currPointer.length(), this.prevPointer.length())
        if (distanceToCenter  < this.data.slowdownRadius) {
            const scaleFactor = distanceToCenter / this.data.slowdownRadius
            angle *= scaleFactor
        }
        
        this.zQuaternion.setFromAxisAngle(this.zAxis, angle)
        this.el.object3D.quaternion.premultiply(this.zQuaternion);
    }
});

// Make available the screen position of an entity
AFRAME.registerComponent('entity-screen-position', {

    init: function () {
  
        this.vector = new THREE.Vector3()

        // need to keep an up-to-date view of canvs bounds
        this.canvasBounds = document.body.getBoundingClientRect();
        this.updateCanvasBounds = AFRAME.utils.debounce(() => {
            this.canvasBounds = this.el.sceneEl.canvas.getBoundingClientRect()
          }, 500);
        
        window.addEventListener('resize', this.updateCanvasBounds);
        window.addEventListener('scroll', this.updateCanvasBounds);

        this.getEntityScreenPosition = this.getEntityScreenPosition.bind(this)
    },
    

    remove() {
        window.removeEventListener('resize', this.updateCanvasBounds);
        window.removeEventListener('scroll', this.updateCanvasBounds);
    },

    getEntityScreenPosition(vector2) {

        this.el.object3D.getWorldPosition(this.vector)
        //console.log("World Position:", this.vector)
        this.vector.project(this.el.sceneEl.camera)

        //console.log("Projected vector x, y:", this.vector.x, this.vector.y)

        const bounds = this.canvasBounds;
        //console.log("Canvas Bounds:", bounds)
        vector2.set((this.vector.x + 1) * bounds.width / 2,
                     bounds.height - ((this.vector.y + 1) * bounds.height / 2))
        //console.log("Model position on screen:", vector2)

        return vector2
    }
});

AFRAME.registerComponent('mouse-dolly', {

    init: function () {

        // 1 - no movement; < 1 = reverse movement.
        this.moveSpeed = 1.3
  
        this.zQuaternion = new THREE.Quaternion();
        this.zAxis = new THREE.Vector3(0, 0, 1);
    
        this.onMouseWheel = this.onMouseWheel.bind(this);
        document.addEventListener('mousewheel', this.onMouseWheel);
    },

    remove() {
        document.removeEventListener('mousewheel', this.onMouseWheel);
    },
    
    onMouseWheel: function (evt) {
        this.dollyModel(evt);
    },
  
    dollyModel: function (evt) {

        const dY = evt.deltaY;

        const scalar = Math.pow(this.moveSpeed, -dY/400);
        this.el.object3D.position.multiplyScalar(scalar)
    }
});
  

