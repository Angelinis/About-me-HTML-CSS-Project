import { createEntity } from "./createEntity.js";

window.addEventListener("DOMContentLoaded", () => {
  const scene = document.querySelector("#root");

  // Environment
  const environment = createEntity("a-entity", {
    environment: "preset: forest"
  });

  // Sky
  const sky = createEntity("a-sky", {
    color: "#ECECEC"
  });

const player = `
  <a-entity id="rig"
            movement-controls="constrainToNavMesh: true;
                               controls: checkpoint, gamepad, trackpad, keyboard, nipple;"
            position="1.5 0.3 -3.6">
    <a-entity camera
              position="0 1.6 0"
              look-controls>
    </a-entity>
  </a-entity>
`;

scene.insertAdjacentHTML('beforeend', player);

const cursor = `
 <a-entity
        id="cursor"
        cursor="rayOrigin: mouse"
        raycaster="objects: .interactable; far: Infinity"
        mouse-manipulation>
  </a-entity>  
`;

scene.insertAdjacentHTML('beforeend', cursor);

const vr = createEntity("a-entity", {
  id: "sound-source",
   "gltf-model": "./src/assets/objects/lowpoly_vr_glasses.glb",
     position: "3.2 2.0 -4.9",
     scale: "2 2 2",
     animation: "property: position; to: 3.2 2.2 -4.9; dur: 2000; easing: easeInOutSine; loop: true;  dir: alternate",
sound:"src: url(./src/assets/objects/music.wav); loop: true; distanceModel: linear; refDistance: 1; maxDistance: 4",
     "start-audio-on-click": "",
      class: "interactable movable"

    //  animation: "property: rotation; to: 0 360 0; loop: true; dur: 10000"
}
)

vr.addEventListener('click', () => {
  vr.components.sound.playSound();
});



const navMesh = createEntity("a-entity", {
  "gltf-model": "./src/assets/objects/navmesh(3).gltf",
  "nav-mesh": "",
     position: "7.0 5.2 1.3",
     scale: "0.3 0.3 0.25",
     visible: "false"
  });


  const museum = createEntity("a-entity", {
    "gltf-model": "./src/assets/objects/museum2.glb",
     position: "7.0 5.2 1.3",
     scale: "0.3 0.3 0.25"
  });

  const unity_logo = createEntity("a-entity", {
    "gltf-model": "./src/assets/objects/unity_engine_logo.glb",
     position: "-0.7 2.8 -12.0",
     scale: "0.1 0.1 0.1"
  });

    const c_logo = createEntity("a-entity", {
    "gltf-model": "./src/assets/objects/c_logo.glb",
     position: "-2.9 1.2 -12.0",
     scale: "0.02 0.02 0.02"
  });

      const javascript_logo = createEntity("a-entity", {
    "gltf-model": "./src/assets/objects/javascript_logo.glb",
     position: "-1 0.8 -12.0",
     scale: "9 9 9"
  });


javascript_logo.addEventListener('model-loaded', () => {
  javascript_logo.object3D.traverse((node) => {
    if (node.isMesh) {
      node.material.metalness = 0.2; // lower metallic shine
      node.material.roughness = 0.6; // softer, less sharp highlights
    }
  });
});


const mail_logo = createEntity("a-entity", {
  "gltf-model": "./src/assets/objects/mail.glb",
  position: "14.6 2.1 -11.0",
  rotation: "0 -60 0",
  scale: "0.4 0.4 0.4",
  class: "interactable clickable",
  clickable: "url: mailto:angelocoronado@discente.ufg.br" 
});


const linkedin_logo = createEntity("a-entity", {
  "gltf-model": "./src/assets/objects/linkedin_logo.glb",
  position: "15.8 2.1 -9.2",
  rotation: "0 -50 0",
  scale: "0.6 0.6 0.6",
  class: "interactable clickable",
  clickable: "url: https://www.linkedin.com/in/angelo-coronado-m/" 
});

  const developer = createEntity("a-entity", {
    "gltf-model": "./src/assets/objects/developer.glb",
     position: "0 0.3 -10.0",
     scale: "0.22 0.22 0.22",
     "animation-mixer": "clip: *;"
  });






  // Append everything
  scene.append(environment, sky, navMesh, museum, unity_logo, javascript_logo, c_logo, mail_logo, linkedin_logo, vr, developer);


});
