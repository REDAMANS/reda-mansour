import { lilita_one } from "@/app/fonts";
import GradualAnimatedText from "../utility/GradualAnimatedText";
import Project from "../utility/Project";
import type { ProjectProps } from "@/app/interfaces";

const Projects = () => {

    const projects: ProjectProps[] = [
        {
            name: "Gericht restaurant",
            description: "This is a frontend project i did for fun.",
            url: "https://redgerichtrestaurant.netlify.app",
            img: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/63b5af6f244f0520204954fa/screenshot_2023-01-04-16-55-15-0000.png&fit=cover&h=500&w=800"
        },
        {
            name: "Tunifral EURL siege",
            description: "A real production website for a company that sells utensils.",
            url: "https://tunifral-eurl-siege.vercel.app",
            img: "/assets/tunifral.png"
        },
        {
            name: "Webswize",
            description: "Webswize is a company of web development that provides some useful AI services and more.",
            url: "https://webswize.vercel.app",
            img: "/assets/webswize.png",
            className: "lg:row-span-2"
        },
        {
            name: "Youtube clown 2",
            description: "A remake for the first youtube clown, with more accurate design. Unfortunately, it lacks responsivity",
            url: "https://l3aloz2ndyoutube.netlify.app",
            img: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/63fe383dc51926066dd79591/screenshot_2023-02-28-17-22-07-0000.png&fit=cover&h=500&w=800"
        },
        {
            name: "Open AI GPT-3",
            description: "This one was made during my learning process.",
            url: "https://redopenai.netlify.app",
            img: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/63b5be4a39abc52ef73ca7fe/screenshot_2023-01-04-17-58-39-0000.png&fit=cover&h=500&w=800"
        }
    ]

    return (
        <section className="section__padding flex flex-col gap-12">
            <header className="flex flex-col gap-8 items-center">
                <h2 className={`${lilita_one}`}>
                    <GradualAnimatedText gap={14} text="My projects" />
                </h2>
                <p className="small__text text-center max-w-3xl">
                    This section is dedicated for my personal projects, some of them are for production, others are for showoff
                </p>
            </header>
            <div className="grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    projects.map((p, i) => (
                        <Project {...p} key={i}  />
                    ))
                }
            </div>
        </section>
    );
}

export default Projects;