"use client"
import { useRef } from "react";
import { Mesh, Vector3 } from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import type { SphereProps, MeshProps } from "@/app/interfaces";

const Sphere = (props: SphereProps & MeshProps & { children?: React.ReactNode | React.ReactNode[] }) => {

    const colorMap = useLoader(TextureLoader, props.textureUrl);

    const meshRef = useRef<Mesh>(null!);

    useFrame((state, delta) => {
        if(typeof props.rotationAxis !== "undefined") {
            meshRef.current.rotation.x += delta * props.rotationAxis[0] / 10;
            meshRef.current.rotation.y += delta * props.rotationAxis[1] / 10;
            meshRef.current.rotation.z += delta * props.rotationAxis[2] / 10;
        }
    })

    return (
        props.isObject3D ?
        <object3D>
            <sphereGeometry {...props.sphereGeometryProps} />
            <meshStandardMaterial map={colorMap} {...props.meshStandardMaterialProps} />
        </object3D>
        :
        <mesh
            ref={meshRef}
            {...props.meshProps}
            >
            <sphereGeometry {...props.sphereGeometryProps} />
            <meshStandardMaterial map={colorMap} {...props.meshStandardMaterialProps} />
            {props.children}
        </mesh>
    );
}

export default Sphere;