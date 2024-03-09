import { Introduction, AboutMe, Projects, Scene } from "./components";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Introduction />
      <AboutMe />
      <Projects />
      <Scene />
    </main>
  );
}