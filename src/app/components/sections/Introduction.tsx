import GradualAnimatedText from "../utility/GradualAnimatedText";
import { lilita_one } from "@/app/fonts";

const Introduction = () => {

    return (
        <section className={`mt-32 mb-32 section__padding flex flex-col gap-8 ${lilita_one.className}`}>
            <h1>
                <GradualAnimatedText text="Hello, world!" />
            </h1>
            <p className="small__text fade-right max-w-lg">
                My name is Mohamed Reda Mansour, I am a self taught web developer with various frontend, UI/UX and backend skills. I dedicated this website to show some of my work.
            </p>
        </section>
    );
}

export default Introduction;