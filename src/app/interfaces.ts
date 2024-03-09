import { ThreeElements } from "@react-three/fiber";

export interface ProjectProps {
    name: string;
    description: string;
    img: string;
    url: string;
    className?: string;
}

export interface MeshProps {
    meshProps?: ThreeElements["mesh"];
    meshStandardMaterialProps?: ThreeElements["meshStandardMaterial"];
    textureUrl: string
    rotationAxis?: [number, number, number];
}

export interface SphereProps {
    sphereGeometryProps?: ThreeElements["sphereGeometry"];
    isObject3D?: boolean;
}

export interface RingProps {
    ringGeometryProps?: ThreeElements["ringGeometry"];
}
