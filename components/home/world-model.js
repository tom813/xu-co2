import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TWEEN } from "three/examples/jsm/libs/tween.module.min";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import $ from "jquery";

import { WorldModelContainer, WorldModelSpinner } from "./world-model-loader";
import { useColorModeValue } from "@chakra-ui/react";

const WorldModel = () => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();
  const [_camera, setCamera] = useState();
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState();

  const modelColor = useColorModeValue(0x444444, 0xffffff);

  /* eslint-disable react-hooks/exhaustive-deps */

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer;
    if (container && renderer && _camera) {
      _camera.aspect = container.clientWidth / container.clientHeight;
      _camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
  }, [renderer]);

  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      /* INIT VARS */

      var proton, emitter;
      var renderer, dat, spring, gui, scl, genCld;
      var group,
        item,
        cube,
        mesh,
        mesh2,
        randomBehaviour,
        gravity,
        pointLight2,
        pointLight,
        pointLight3,
        rectLight;
      var s = 0;
      var objects = [];
      var group = new THREE.Object3D();
      var angle = 0,
        angl = 0;
      var radius = 140;
      var genObj = [];
      var genGr, genSymbl, spot;

      var worldObject;
      var isWorldBig;
      var model = "/models/world.obj";

      /* INIT SCENE */

      // const clock = new THREE.Clock();
      const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        1,
        1000
      );
      camera.position.z = 100;
      camera.position.y = 20;
      camera.position.x = 100;
      setCamera(camera);

      scene.fog = new THREE.Fog(0xffffff, 1, 10000);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas: document.querySelector("#world-model-canvas")
          ? document.querySelector("#world-model-canvas")
          : null,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(container.clientWidth, container.clientHeight);

      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      window.addEventListener("mousedown", onMouseDown, false);

      function onMouseDown() {}

      // function spreadCloud(arr) {
      //   for (var i = 0, len = arr.length; i < len; i++) {
      //     var sym = arr[i];
      //     // sym.lookAt(scene.position);
      //     new TWEEN.Tween(sym.position)
      //       .to(
      //         {
      //           x: 800 * Math.random() - 400,
      //           y: 800 * Math.random() - 400,
      //           z: 800 * Math.random() - 400,
      //         },
      //         1000
      //       )
      //       .easing(TWEEN.Easing.Quintic.InOut)
      //       .start();

      //     // sym.position.set(
      //     //   200 * Math.random() - 100,
      //     //   200 * Math.random() - 100,
      //     //   200 * Math.random() - 100
      //     // );

      //     // group.add(sym);
      //   }
      //   // scene.add(group);
      // }

      // function combineCloud(genObj, mod) {
      //   var scale = 10000000;
      //   for (var g = 0, len = mod.count; g < len; g++) {
      //     var sym = genObj[g];
      //     const vertex = new THREE.Vector3();
      //     vertex.fromBufferAttribute(mod, g);
      //     // sym.lookAt(scene.position);
      //     new TWEEN.Tween(sym.position)
      //       .to(
      //         {
      //           x: vertex.x / scale,
      //           y: vertex.y / scale,
      //           z: vertex.z / scale,
      //         },
      //         1000
      //       )
      //       .easing(TWEEN.Easing.Quintic.InOut)
      //       .start();
      //   }
      // }

      // function genVertices(mod) {
      //   var mat = new THREE.MeshBasicMaterial({ color: modelColor });

      //   const rootPositionsResult = [];

      //   var scale = 11;
      //   for (var g = 0, len = mod.count; g < len; g++) {
      //     const vertex = new THREE.Vector3();
      //     vertex.fromBufferAttribute(mod, g);

      //     rootPositionsResult.push(vertex.x / scale);
      //     rootPositionsResult.push(vertex.y / scale);
      //     rootPositionsResult.push(vertex.z / scale);

      //     var symbl = new THREE.Object3D();
      //     var geometry = new THREE.SphereGeometry(Math.random(0.2, 2), 5, 5);
      //     spot = new THREE.Mesh(geometry, mat);
      //     spot.position.set(
      //       vertex.x / scale,
      //       vertex.y / scale,
      //       vertex.z / scale
      //     );
      //     symbl.add(spot);

      //     genObj.push(symbl);
      //   }

      //   for (var i = 0, len = genObj.length; i < len; i++) {
      //     var sym = genObj[i];
      //     sym.lookAt(scene.position);

      //     group.add(sym);
      //   }
      //   scene.add(group);

      //   router.events.on("routeChangeStart", (url) => {
      //     handleRouteChange(url, genObj, mod);
      //   });

      //   window.addEventListener("load", () =>
      //     handleRouteChange(router.pathname, genObj, mod)
      //   );

      //   // ScrollTrigger.create({
      //   //   trigger: "#world-model-canvas",
      //   //   start: "top 50%",
      //   //   // markers: true,
      //   //   // endTrigger: "#otherID",
      //   //   end: "70% 50%",
      //   //   onToggle: (self) => {
      //   //     if (self.isActive && self.progress >= 0 && !animFinished) {
      //   //       // spreadCloud(genObj);
      //   //     } else if (!self.isActive && self.progress <= 1 && !animFinished) {
      //   //       combineCloud(genObj, mod);
      //   //       animFinished = true;
      //   //     }
      //   //   },
      //   // });

      //   // combineCloud(mod)
      // }

      // const handleRouteChange = (url, genObj, mod) => {
      //   if (worldObject) {
      //     if (url == "/" && isWorldBig) {
      //       combineCloud(genObj, mod);
      //       new TWEEN.Tween(worldObject.scale)
      //         .to(
      //           {
      //             x: 0.09,
      //             y: 0.09,
      //             z: 0.09,
      //           },
      //           1000
      //         )
      //         .easing(TWEEN.Easing.Quintic.InOut)
      //         .start();
      //       isWorldBig = false;
      //     } else if (url == "/projects" && !isWorldBig) {
      //       spreadCloud(genObj);
      //       new TWEEN.Tween(worldObject.scale)
      //         .to(
      //           {
      //             x: 0.41,
      //             y: 0.41,
      //             z: 0.41,
      //           },
      //           1000
      //         )
      //         .easing(TWEEN.Easing.Quintic.InOut)
      //         .start();
      //       isWorldBig = true;
      //     }
      //   }
      // };

      /* LOAD MODEL */

      // var objLoader = new OBJLoader();
      // objLoader.load(model, function (obj) {
      //   console.log(obj.toJSON());
      // });

      // var objectLoader = new THREE.ObjectLoader();
      var objectLoader = new OBJLoader();
      var material1 = new THREE.MeshPhongMaterial({
        color: modelColor,
        wireframe: true,
        shininess: 0,

        opacity: 0.8,
        side: THREE.DoubleSide,
      });
      objectLoader.load(
        model,
        function (obj) {
          obj.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
              child.material = material1;
            }
          });

          obj.scale.x = obj.scale.y = obj.scale.z = 0.09;
          // genVertices(obj.children[0].geometry.attributes.position);
          worldObject = obj;
          setLoading(false);
          scene.add(obj);
        },
        // called when loading has errors
        function (error) {
          console.log("Error loading world model");
        }
      );

      /* INIT LIGHTS */

      var dlight = new THREE.DirectionalLight(0xffffff, 1);
      dlight.position.set(-1, 1, -1); //default; light shining from top
      dlight.castShadow = true; // default false
      scene.add(dlight);

      var dlight2 = new THREE.DirectionalLight(0xffffff, 1);
      dlight2.position.set(1, -1, 1); //default; light shining from top
      dlight2.castShadow = true; // default false
      scene.add(dlight2);

      /* INIT CONTROLS */

      // const controls = new TrackballControls(camera, renderer.domElement);
      // controls.rotateSpeed = 1.2;
      // controls.minDistance = 10;
      // controls.maxDistance = 1000;
      // controls.noRotate = false;
      // controls.addEventListener("change", render);
      // (controls.enabled = false), setControls(controls);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1;

      let req = null;

      const animate = () => {
        req = requestAnimationFrame(animate);
        controls.update();
        // s++;
        // $(".time").text(s);
        TWEEN.update();
        render();
      };

      function render() {
        if (camera) {
          renderer.render(scene, camera);
          camera.lookAt(scene.position);
          camera.updateProjectionMatrix();
          // angle += 0.001;

          // angl += 0.1;
          // for(var g = 0, len = genObj.length; g<len; g++){
          //   var sym = genObj[g];
          //   var rnd = Math.random(0.1,0.1);
          //   sym.scale.x = rnd;
          //   sym.scale.z = rnd;
          //   sym.scale.y = rnd;
          // }
          // mesh.position.x = 1 * Math.cos( angl);
          // mesh.position.z = 1 * Math.sin( angl);
          // camera.position.x = radius * Math.cos(angle);
          // camera.position.z = radius * Math.sin(angle);
        }
      }

      animate();

      return () => {
        cancelAnimationFrame(req);
        window.removeEventListener("mousedown", onMouseDown);
        // controls.removeEventListener("change", render);
        // router.events.off("routeChangeStart", (url) => {
        //   handleRouteChange(url, genObj, mod);
        // });
        // window.removeEventListener("load", () =>
        //   handleRouteChange(router.pathname, genObj, mod)
        // );
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);

  return (
    <WorldModelContainer ref={refContainer}>
      {loading && <WorldModelSpinner />}
    </WorldModelContainer>
  );
};

export default WorldModel;
