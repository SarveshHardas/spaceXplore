"use client";

import {useState, useRef, useEffect} from "react";
import Image from "next/image";
import gsap from "gsap";
import {planets} from "@/app/data/planetInfo";

export default function PlanetCarousel() {
    const [index, setIndex] = useState(0);
    const planetRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        gsap.to(imgRef.current, {
            y: 10,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        gsap.to(imgRef.current, {
            rotateY: 360,
            duration: 60,
            repeat: -1,
            ease: "none",
        });
    }, []);

    const animatePlanet = () => {
        gsap.fromTo(
            planetRef.current,
            {opacity: 0, scale: 0.8},
            {opacity: 1, scale: 1, duration: 0.6, ease: "power3.out"}
        );
    };

    const nextPlanet = () => {
        setIndex((prev) => (prev + 1) % planets.length);
        animatePlanet();
    };

    const prevPlanet = () => {
        setIndex((prev) =>
            prev === 0 ? planets.length - 1 : prev - 1
        );
        animatePlanet();
    };

    const showInfo = () => {
        gsap.to(infoRef.current, {
            opacity: 1,
            y: -10,
            duration: 0.4,
        });
    };

    const hideInfo = () => {
        gsap.to(infoRef.current, {
            opacity: 0,
            y: 0,
            duration: 0.4,
        });
    };

    return (
        <section className="h-screen flex items-center justify-center bg-transparent text-white">
            <div className="flex items-center gap-20">

                <button
                    onClick={prevPlanet}
                    className="text-5xl hover:scale-125 transition"
                >
                    ⬅
                </button>

                <div
                    ref={planetRef}
                    onMouseEnter={showInfo}
                    onMouseLeave={hideInfo}
                    className="relative cursor-pointer"
                >
                    <Image
                        ref={imgRef}
                        src={planets[index].image}
                        alt={planets[index].name}
                        width={320}
                        height={320}
                        className="drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                    />

                    <div
                        ref={infoRef}
                        className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-center opacity-0"
                    >
                        <h2 className="text-2xl font-bold">
                            {planets[index].name}
                        </h2>
                        <p className="text-sm text-gray-300 max-w-xs">
                            {planets[index].description}
                        </p>
                    </div>
                </div>

                <button
                    onClick={nextPlanet}
                    className="text-5xl hover:scale-125 transition"
                >
                    ➡
                </button>

            </div>
        </section>
    );
}
