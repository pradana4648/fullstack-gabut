import { useEffect } from "react";
import {
  BoxGeometry,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  WireframeGeometry,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import myFont from "@compai/font-recursive/data/typefaces/normal-400.json";

const App: React.FC = () => {
  useEffect(() => {
    const canvas = document.querySelector("#text")!;
    const renderer = new WebGLRenderer({ canvas, antialias: true });
    const scene = new Scene();

    const camera = new PerspectiveCamera(
      30,
      innerWidth / innerHeight,
      1,
      10000
    );
    camera.position.set(0, 0, 10);

    const control = new OrbitControls(camera, renderer.domElement);

    const box = new BoxGeometry(1, 1, 1);
    const wireframe = new WireframeGeometry(box);

    const line = new LineSegments(wireframe);

    scene.add(line);

    renderer.setPixelRatio(devicePixelRatio);
    renderer.setSize(innerWidth, innerHeight);
    renderer.render(scene, camera);

    control.update();

    function draw(time: number) {
      time *= 0.001;
      line.rotation.x = time;
      line.rotation.y = time;
      requestAnimationFrame(draw);

      control.update();

      renderer.render(scene, camera);
    }

    requestAnimationFrame(draw);
  });

  return <canvas id="text"></canvas>;
};

export default App;
