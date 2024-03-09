import Navbar from "../navbar/Navbar";
import Image from "next/image";

const Header = () => {
    return (
        <header className="flex flex-row items-center justify-between py-[2rem] px-[2rem] md:px-[4rem] lg:px-[6rem]">
            <Image src="/assets/portfolio-logo.svg" alt="MR" className="w-[70px]" width={85} height={60} />
            <Navbar />
        </header>
    );
}

export default Header;