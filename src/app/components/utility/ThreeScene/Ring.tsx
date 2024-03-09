"use client"
import { useRef } from "react";
import {Mesh} from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import type { RingProps, MeshProps } from "@/app/interfaces";

const Ring = (props: RingProps & MeshProps) => {

    const colorMap = useLoader(TextureLoader, "./assets/textures/saturn_ring.jpg");

    const meshRef = useRef<Mesh>(null!);

    useFrame((state, delta) => {
        meshRef.current.rotation.z += delta / 15;
    })

    return (
        <mesh
            ref={meshRef}
            {...props.meshProps}
            >
            <ringGeometry {...props.ringGeometryProps} />
            <meshStandardMaterial map={colorMap} {...props.meshStandardMaterialProps} />
        </mesh>
    );
}

export default Ring;