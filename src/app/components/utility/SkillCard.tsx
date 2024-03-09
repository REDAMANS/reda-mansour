import { lilita_one } from "@/app/fonts";
import { FaCheck } from "react-icons/fa6";

interface SkillProps {
    name: string;
    categories: string[];
    list: string[];
}

const SkillCard = (props: SkillProps) => {
    return (
        <div className="flex-1 min-w-[200px] flex flex-col gap-6 py-12 px-8 rounded-md border border-[#00A3FF] bg-[#0309ac75]">
            <h2 className={`${lilita_one.className} text-xl self-center`}>{props.name}</h2>
            <div className="flex flex-row flex-wrap gap-3">
                {
                    props.categories.map((s, i) => (
                        <p className="flex-1 whitespace-nowrap text-center px-2 py-[2px] rounded-md bg-[#8A16FF]" key={i}>{s}</p>
                    ))
                }
            </div>
            <div className="w-full h-[1px] bg-gray-400"></div>
            <div className="flex flex-col gap-5">
                {
                    props.list.map((p, i) => (
                        <div key={i} className="flex flex-row gap-3">
                            <p className="mt-1"><FaCheck /></p>
                            <p>{p}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SkillCard;