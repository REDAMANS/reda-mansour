import type { ProjectProps } from "@/app/interfaces";
import Image from "next/image";
import Link from "next/link";
import { lilita_one } from "@/app/fonts";

const Project = (props: ProjectProps) => {
    return (
        <div className={`${props.className} w-full h-full rounded-lg bg-[#38068d6e]`}>
            <Link className="flex flex-col h-full" href={props.url}>
                <Image className="w-full" src={props.img} alt={props.name} width={300} height={300} />
                <div className="flex flex-col gap-3 p-4">
                    <p className={`text-lg ${lilita_one}`}>{props.name}</p>
                    <p className="small__text">{props.description}</p>
                </div>
            </Link>
        </div>
    );
}

export default Project;