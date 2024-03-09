"use client";
import { Canvas } from "@react-three/fiber";
import { Sphere, Ring } from "@/app/components"

const Scene = () => {

    return (
        <div className="-z-10 aspect-square fixed left-0 top-0 w-full h-screen brightness-50">
            <Canvas
            className="w-full aspect-square"
            camera={{ fov: 50, position: [0, 0, 40] }}>
                <ambientLight intensity={0.1} />
                <directionalLight intensity={2} position={[5, 5, 0]} /> 
                <Sphere rotationAxis={[0, 1, 0]} textureUrl="./assets/textures/earth_colormap.jpg" meshProps={{ position: [-14, -12, 0]}} sphereGeometryProps={{ args: [.8, 100, 100] }}>
                        <Sphere rotationAxis={[0, 2, 0]} textureUrl="./assets/textures/moon_colormap.jpg" meshProps={{ position: [-10, 0, 0]}} sphereGeometryProps={{ args: [.3, 80, 80] }} />
                </Sphere>
                <Sphere rotationAxis={[0, 1, 0]} textureUrl="./assets/textures/venus_colormap.jpg" meshProps={{ position: [-20, 12, 0]}} sphereGeometryProps={{ args: [.8, 100, 100] }}/>
                <Sphere rotationAxis={[2, 1, 1]} textureUrl="./assets/textures/uranus_colormap.jpg" meshProps={{ position: [3, -20, -10]}} sphereGeometryProps={{ args: [2.3, 100, 100] }}/>
                <Sphere rotationAxis={[2, 1, 1]} textureUrl="./assets/textures/neptune_colormap.jpg" meshProps={{ position: [-30, 4, -10]}} sphereGeometryProps={{ args: [2.4, 100, 100] }}/>
                <Sphere rotationAxis={[0, 1, 0]} textureUrl="./assets/textures/mercury_colormap.jpg" meshProps={{ position: [-5, 10, 10]}} sphereGeometryProps={{ args: [.4, 100, 100] }}/>
                <Sphere rotationAxis={[2, 1, 1]} textureUrl="./assets/textures/mars_colormap.jpg" meshProps={{ position: [10, 10, 10]}} sphereGeometryProps={{ args: [.4, 100, 100] }}/>
                <Sphere rotationAxis={[0, 1, 2]} textureUrl="./assets/textures/jupiter_colormap.jpg" meshProps={{ position: [32, 5, -8]}} sphereGeometryProps={{ args: [6, 100, 100] }}
                />

                <>
                    <Sphere rotationAxis={[1, 0 ,1]} textureUrl="./assets/textures/saturn_colormap.jpg" sphereGeometryProps={{ args: [5, 100, 100] }} />
                    <Ring textureUrl="./assets/textures/saturn_ring.jpg" meshProps={{ rotation: [-Math.PI / 2.5, 0, 0]}} ringGeometryProps={{ args: [8, 12, 50, 30]}} />
                </>
            </Canvas>
        </div>
    );
}

export default Scene;