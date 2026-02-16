import { createEntity } from "./createEntity.js";

// Import all assets as modules:
import vrglasses from "../assets/objects/lowpoly_vr_glasses.glb?url";
import navmesh from "../assets/objects/navmesh.gltf?url";
import museumModel from "../assets/objects/museum2.glb?url";
import unityLogo from "../assets/objects/unity_engine_logo.glb?url";
import cLogo from "../assets/objects/c_logo.glb?url";
import javascriptLogo from "../assets/objects/javascript_logo.glb?url";
import mailLogo from "../assets/objects/mail.glb?url";
import linkedinLogo from "../assets/objects/linkedin_logo.glb?url";
import developerModel from "../assets/objects/developer.glb?url";
import musicSound from "../assets/objects/music.wav?url";

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
            movement-controls="constrainToNavMesh: true; controls: checkpoint, gamepad, trackpad, keyboard, nipple;"
            position="1.5 0.3 -3.6">
    <a-entity camera position="0 1.6 0" look-controls></a-entity>
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
    "gltf-model": vrglasses,
    position: "3.2 2.0 -4.9",
    scale: "2 2 2",
    animation: "property: position; to: 3.2 2.2 -4.9; dur: 2000; easing: easeInOutSine; loop: true; dir: alternate",
    sound: `src: url(${musicSound}); loop: true; distanceModel: linear; refDistance: 1; maxDistance: 4`,
    "start-audio-on-click": "",
    class: "interactable movable"
  });

  vr.addEventListener('click', () => {
    vr.components.sound.playSound();
  });

  const navMesh = createEntity("a-entity", {
    "gltf-model": navmesh,
    "nav-mesh": "",
    position: "7.0 5.2 1.3",
    scale: "0.3 0.3 0.25",
    visible: "false"
  });

  const museum = createEntity("a-entity", {
    "gltf-model": museumModel,
    position: "7.0 5.2 1.3",
    scale: "0.3 0.3 0.25"
  });

  const unity_logo = createEntity("a-entity", {
    "gltf-model": unityLogo,
    position: "-0.7 2.8 -12.0",
    scale: "0.1 0.1 0.1"
  });

  const c_logo = createEntity("a-entity", {
    "gltf-model": cLogo,
    position: "-2.9 1.2 -12.0",
    scale: "0.02 0.02 0.02"
  });

  const javascript_logo = createEntity("a-entity", {
    "gltf-model": javascriptLogo,
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
    "gltf-model": mailLogo,
    position: "14.6 2.1 -11.0",
    rotation: "0 -60 0",
    scale: "0.4 0.4 0.4",
    class: "interactable clickable",
    clickable: "url: mailto:angelocoronado@discente.ufg.br"
  });

  const linkedin_logo = createEntity("a-entity", {
    "gltf-model": linkedinLogo,
    position: "15.8 2.1 -9.2",
    rotation: "0 -50 0",
    scale: "0.6 0.6 0.6",
    class: "interactable clickable",
    clickable: "url: https://www.linkedin.com/in/angelo-coronado-m"
  });

  const developer = createEntity("a-entity", {
    "gltf-model": developerModel,
    position: "0 0.3 -10.0",
    scale: "0.22 0.22 0.22",
    "animation-mixer": "clip: *;"
  });

  // Append everything
  scene.append(environment, sky, navMesh, museum, unity_logo, javascript_logo, c_logo, mail_logo, linkedin_logo, vr, developer);
});
