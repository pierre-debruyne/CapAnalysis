import localFont from "next/font/local";

export const montserrat = localFont({
  src: [
    { path: "../../public/fonts/Montserrat-Light.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/Montserrat-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Montserrat-SemiBold.otf", weight: "600", style: "normal" },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

export const playfair = localFont({
  src: [
    { path: "../../public/fonts/PlayfairDisplay-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/PlayfairDisplay-Italic.otf",  weight: "400", style: "italic" },
    { path: "../../public/fonts/PlayfairDisplay-Bold.otf",    weight: "700", style: "normal" },
    { path: "../../public/fonts/PlayfairDisplay-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../../public/fonts/PlayfairDisplay-Black.otf",   weight: "900", style: "normal" },
    { path: "../../public/fonts/PlayfairDisplay-BlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-playfair",
  display: "swap",
});