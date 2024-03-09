import SkillCard from "../utility/SkillCard";
import { lilita_one } from "@/app/fonts";
import GradualAnimatedText from "../utility/GradualAnimatedText";

const AboutMe = () => {

    const skills = [
        {
            name: "Frontend",
            categories: ["UI / UX", "Javascript", "Typescript", "React.js", "Next.js", "Three.js"],
            list: [
                "Designing beautiful user interfaces",
                "DOM manipulation",
                "Using SSR for better performance",
                "Fetching API endpoints",
                "Rendering animated 3D objects using Threejs's WebGL",
                "Data caching and revalidation",
                "Typescript for scalable projects"
            ]
        },
        {
            name: "Backend",
            categories: ["Node.js", "Express", "MongoDB", "Prisma", "API", "Auth.js"],
            list: [
                "Basic knowledge of node.js runtime",
                "Using express for easier backend experience",
                "Creating API endpoints from scratch",
                "Creating and managing databases",
                "Providing User authentication",
            ]
        }
    ]

    return (
        <section className="section__padding flex flex-col gap-12">
            <header className="flex flex-col gap-8 items-center">
                <h2 className={`${lilita_one}`}>
                    <GradualAnimatedText gap={14} text="About me" />
                </h2>
                <p className="small__text text-center max-w-3xl">
                    For a long time, coding was my hobby, I&apos;ve always tried to improve my skills as a web developer and also as a designer to create real websites and web applications. During the process of learning, I also imrpoved my SEO skills to improve website rankings. Today, well, I&apos;m still learning, but I&apos;m also capable of creating websites with many features, including E-commerce websites, portfolios, brand websites ...<br />
                </p>
            </header>
            <div className="flex flex-row flex-wrap gap-16 justify-center">
                {
                    skills.map((skill, i) => (
                        <SkillCard key={i} {...skill} />
                    ))
                }
            </div>
        </section>
    );
}

export default AboutMe;