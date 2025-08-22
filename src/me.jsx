import React, {useRef} from 'react';
import fragmentShader from "./shaders/fragment.glsl";
import vertexShader from "./shaders/vertex.glsl";
import {useFrame} from "@react-three/fiber";

const MyMesh = () => {

     const materialRef = useRef();

     useFrame((state) => {
          if (materialRef.current) {
               materialRef.current.uniforms.time.value = state.clock.getElapsedTime();
          }
     });
     return (
          <>
              <mesh>
                  <boxGeometry args={[1, 1, 1]} />
                  {/*<meshBasicMaterial color="red" />*/}
                   <shaderMaterial
                        ref={materialRef}
                        fragmentShader={fragmentShader}
                        vertexShader={vertexShader}
                        uniforms={{ time: { value: 0 } }}
                   />
              </mesh>
          </>
     );
};

export default MyMesh;
