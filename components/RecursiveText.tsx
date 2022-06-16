import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

import typefaceData from "@compai/font-recursive/data/typefaces/normal-400.json";

extend({ TextGeometry });

export default function RecursiveText() {
  const font = new FontLoader().parse(typefaceData);

  return (
    <mesh position={[0, 10, 0]}>
      <textGeometry args={["test", { font, size: 5, height: 1 }]} />
      <meshLambertMaterial color={"gold"} />
    </mesh>
  );
}
