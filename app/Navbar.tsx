import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className={"flex flex-col justify-center items-center bg-white/20 px-4 py-14 rounded-r-lg"} style={{
            clipPath: "polygon(0 0, 67% 0, 100% 10%, 100% 90%, 67% 100%, 0 100%)",
        }}>
            <nav className={"space-y-14 list-none"}>
                <li>
                    <Link href={"/"}>
                        <Image src={"/home.png"} alt={"home"} width={45} height={45}/>
                    </Link>
                </li>
                <li>
                    <Link href={"/Planets"}>
                        <Image src={"/planet.png"} alt={"planet"} width={45} height={45}/>
                    </Link>
                </li>
                <li>
                    <Link href={"/SolarSystem"}>
                        <Image src={"/orbit.png"} alt={"solarSystem"} width={45} height={45}/>
                    </Link>
                </li>
            </nav>
        </div>
    )
}

export default Navbar;