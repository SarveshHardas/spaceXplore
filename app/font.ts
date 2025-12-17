import localFont from "next/font/local";

export const melete = localFont({
    src: [
        { path: "../public/fonts/melete/Melete-UltraLight.otf", weight: "200" },
        { path: "../public/fonts/melete/Melete-Light.otf", weight: "300" },
        { path: "../public/fonts/melete/Melete-Regular.otf", weight: "400" },
        { path: "../public/fonts/melete/Melete-Medium.otf", weight: "500" },
        { path: "../public/fonts/melete/Melete-Bold.otf", weight: "700" },
    ],
    variable: "--font-melete",
    display: "swap",
});
