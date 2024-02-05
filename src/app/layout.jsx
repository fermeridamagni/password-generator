import "@/resources/styles/globals.css";

import { fontText, fontTitle } from "@/resources/fonts/fonts.config";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Providers from "./providers";

export const metadata = {
  title: "Password Generator by @fermeridamagni",
  description:
    "This is a simple password generator made with ReactJS and TailwindCSS by @fermeridamagni.",
  keywords: "password generator, fermeridamagni, magnideveloper",
  auhor: "@fermeridamagni | https://github.com/fermeridamagni",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className="scroll-smooth selection:bg-sky-700 selection:text-black"
    >
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${fontText.variable} ${fontTitle.variable} font-text`}>
        <Providers>
          <NavBar />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
