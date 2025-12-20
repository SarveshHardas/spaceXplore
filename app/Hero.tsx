import localFont from "next/font/local";

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
        <div className="flex justify-between items-center ">
            <p className={"font-melete font-bold text-6xl capitalize"}>PlanetXplore</p>
            <div/>
        </div>
    );
}
