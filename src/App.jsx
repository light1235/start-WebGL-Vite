
import './App.css'
import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls} from "@react-three/drei";
import MyMesh from "./me.jsx";

function App() {

  return (
    < div className="App" style={{height: '100vh', width: '100vw'}}>
         <Canvas camera={{position: [0, 17, 45], fov: 30}}>
              <OrbitControls    />
              <gridHelper args={[30, 30, 'red', 'black']}/>
              <Environment preset="forest" background blur={0.4}/>
              <MyMesh/>
         </Canvas>
    </div>
  )
}

export default App
