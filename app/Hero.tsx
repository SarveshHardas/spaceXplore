import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "./Navbar";

const melete = localFont({
    src:[
        {
            path: "../public/fonts/melete/Melete-UltraLight.otf",
            weight:"200",
            style:"normal"
        },{
            path: "../public/fonts/melete/Melete-Light.otf",
            weight:"300",
            style:"normal"
        },{
            path: "../public/fonts/melete/Melete-Regular.otf",
            weight:"400",
            style:"normal"
        },{
            path: "../public/fonts/melete/Melete-Medium.otf",
            weight:"500",
            style:"normal"
        },{
            path: "../public/fonts/melete/Melete-Bold.otf",
            weight:"700",
            style:"normal"
        },
    ],
    variable:"--font-melete",
    display:"swap"
})

export default function Hero() {
    return (
        <div className="flex justify-between items-center bg-[url('/bg.jpg')] mx-auto bg-cover min-h-screen">
            <Navbar/>
            <p className={"font-melete font-bold text-6xl capitalize"}>PlanetXplore</p>
            <div/>
        </div>
    );
}
