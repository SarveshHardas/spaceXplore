import Hero from "@/app/Hero";
import PlanetPage from "@/app/Planets/page";
import SolarSystem from "@/app/SolarSystem/page";

export default function Home(){
    return(
        <div className="flex flex-col items-center justify-center">
            <div className={"min-h-screen flex justify-center items-center"}><Hero/></div>
            <div className={"min-h-screen flex justify-center items-center"}><PlanetPage/></div>
            <div className={"min-h-screen flex justify-center items-center"}><SolarSystem/></div>
        </div>
    );
}