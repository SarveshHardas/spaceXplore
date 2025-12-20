import {planets} from "./planetInfo";
import Image from "next/image";

const Page = () => {
    return (
        <div
            className={"flex flex-col justify-around items-center pt-20 mx-auto bg-cover min-h-screen font-melete "}>
            <h1 className={"text-3xl"}>Planets Details</h1>
            <div className={"grid grid-cols-3 gap-10 font-serif"}>
                {
                    planets.map((planet, id) => (
                        planet.id === 3 ? (
                            <div key={planet.id} className={"row-span-2 flex flex-col justify-center items-start bg-white/20 p-4 rounded-xl border-white border-2"}>
                                <p>{planet.name}</p>
                                <Image src={`${planet.img}`} alt={""} width={64} height={64}/>
                                <div>
                                    <p>Mass: {planet.properties.mass}</p>
                                    <p>Radius: {planet.properties.radius} km</p>
                                    <p>gravity: {planet.properties.gravity} N</p>
                                    <p>Moon: {planet.properties.moon}</p>
                                    <p>Distance from sun: {planet.properties.distance} km</p>
                                    <p>Chances of Life: {planet.properties.chances}</p>
                                </div>
                            </div>
                        ):(
                            <div key={planet.id} className={"bg-white/20 p-4 rounded-xl border-white border-2"}>
                                <p>{planet.name}</p>
                                <Image src={`${planet.img}`} alt={""} width={64} height={64}/>
                                <div>
                                    <p>Mass: {planet.properties.mass}</p>
                                    <p>Radius: {planet.properties.radius} km</p>
                                    <p>gravity: {planet.properties.gravity} N</p>
                                    <p>Moon: {planet.properties.moon}</p>
                                    <p>Distance from sun: {planet.properties.distance} km</p>
                                    <p>Chances of Life: {planet.properties.chances}</p>
                                </div>
                            </div>
                        )
                    ))
                }
            </div>
        </div>
    )
}

export default Page;