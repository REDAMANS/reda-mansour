import Image from "next/image";

const LoadingPage = () => {
    return (
        <div className="fixed h-screen w-full left-0 top-0 flex items-center justify-center">
            <Image src="/assets/spinner.svg" alt="Spinner" width={45} height={45} />
        </div>
    );
}

export default LoadingPage;