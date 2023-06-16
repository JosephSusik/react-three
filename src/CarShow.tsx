import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import Car from './car';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

function CarShow() {
    return(
        <div className='canvas'>
            <Canvas gl={{ toneMappingExposure: 1 }}>
                <Suspense fallback={null}>
                    <spotLight angle={1} position={[100, 100, 0]} intensity={.5} />
                    <spotLight angle={1} position={[-100, 100, 0]} intensity={.5} />
                    <Car position={[0, 0, 0]} scale={15} />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.25} makeDefault />
                <PerspectiveCamera makeDefault position={[-30, 100, 120]} fov={35} />
            </Canvas>
        </div>
    );
}

export default CarShow;