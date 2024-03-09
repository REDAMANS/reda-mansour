import type { ProjectProps } from "@/app/interfaces";
import Image from "next/image";
import Link from "next/link";
import { lilita_one } from "@/app/fonts";

const Project = (props: ProjectProps) => {
    return (
        <div className={`${props.className} w-full h-full rounded-lg bg-[#38068d6e]`}>
            <Link className="flex flex-col h-full" href={props.url}>
                <Image className="w-full aspect-[1.6] overflow-hidden" src={props.img} alt={props.name} width={350.33} height={218.96} />
                <div className="flex flex-col gap-3 p-4">
                    <p className={`text-lg ${lilita_one.className}`}>{props.name}</p>
                    <p className="small__text">{props.description}</p>
                </div>
            </Link>
        </div>
    );
}

export default Project;