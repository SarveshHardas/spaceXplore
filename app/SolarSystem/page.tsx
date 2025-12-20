import {Rocket} from "@/components/ui/Rocket";
import Galaxy from "@/components/ui/Galaxy";

const Page = () => {
    return (
        <div className={"flex flex-col justify-around items-center gap-7"}>
            <h1 className={"text-4xl md:text-6xl font-bold font-serif tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white will-change-transform"}>Explore
                the Solar System in 3D</h1>
            <p className={"text-gray-300 text-lg mg:text-xl leading-relaxed font-sans"}>
                Experience our solar system like never before.
                Travel through planets, orbits, and space in an immersive Web3 VR environment.
            </p>
            <a href={"https://solar-system-rouge-rho.vercel.app/"} target={"_blank"} rel={"noopener noreferrer"}
               className={"inline-block mt-6"}>
                <button
                    className={"bg-neutral-900/30 flex justify-between items-center gap-3 px-7 py-3 rounded-xl hover:scale-105 transition-transform duration-500 "}>
                    Launch the Solar System
                    <Rocket/>
                </button>
            </a>
        </div>
    )
}

export default Page;