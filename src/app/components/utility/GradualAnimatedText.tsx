"use client"
import { useRef, useEffect, useState } from "react";

const GradualAnimatedText = ({ text, gap }: { text: string, gap?: number }) => {

    const [animationStarted, startAnimation] = useState(false);

    const ref = useRef<HTMLHeadingElement>(null!)

    const listener = () => {
        if(ref.current.offsetTop < window.scrollY + window.innerHeight && !animationStarted) {
            startAnimation(true);
        }
    }

    useEffect(() => {
        listener();
        window.addEventListener("scroll", listener);

        return () => window.removeEventListener("scroll", listener);
    }, [listener])

    const textArrWithoutSpace = text.split(' ');

    const spanArr = text
    .split(' ')
    .map((word, i) => (
        <span className={`whitespace-nowrap flex gap-[${gap ? gap : 4}px]`} key={i}>
            {
                word
                .split('')
                .map((letter, j) => (
                    <span key={`${i}${j}`} style={{ 
                        display: "inline-block", 
                        opacity: 0, 
                        animation: "textGradualFadeUp 0.35s ease-in-out", 
                        animationDelay: `${textArrWithoutSpace.slice(0, i).join('').length * 150 + j * 150}ms`,
                        animationFillMode: "forwards"
                    }}>
                        {letter === " " ? <>&nbsp;</> : letter}
                    </span>
                ))
            }
        </span>
    ))

    return (
        <div ref={ref} className="flex flex-wrap gap-5">
            {animationStarted ? spanArr : null}
            &nbsp;
        </div>
    );
}

export default GradualAnimatedText;