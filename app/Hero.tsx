"use client";

import localFont from "next/font/local";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(useGSAP);

const melete = localFont({
    src: [
        {
            path: "../public/fonts/melete/Melete-UltraLight.otf",
            weight: "200",
            style: "normal"
        }, {
            path: "../public/fonts/melete/Melete-Light.otf",
            weight: "300",
            style: "normal"
        }, {
            path: "../public/fonts/melete/Melete-Regular.otf",
            weight: "400",
            style: "normal"
        }, {
            path: "../public/fonts/melete/Melete-Medium.otf",
            weight: "500",
            style: "normal"
        }, {
            path: "../public/fonts/melete/Melete-Bold.otf",
            weight: "700",
            style: "normal"
        },
    ],
    variable: "--font-melete",
    display: "swap"
})

export default function Hero() {

    useGSAP(() => {
        gsap.to("#titleText", {
            z: 200,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power2.out",
        })
    }, [])

    return (
        <div className="overflow-hidden w-full h-40 flex justify-center items-center" style={{perspective: "800px"}}>
            <p  style={{transformStyle: "preserve-3d"}}
               className={"font-melete font-bold text-6xl capitalize bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white will-change-transform"}>SpaceXplore</p>
            <div/>
        </div>
    );
}


