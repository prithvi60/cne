import { Plus_Jakarta_Sans, Prata } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const prata = Prata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-prata",
  weight: "400",
});
const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus_Jakarta_Sans",
});

export const metadata = {
  title: "Chinni Nambi Enterprises: Ayurveda for your family",
  description: "Chinni Nambi Enterprises: Ayurveda for your family",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${prata.variable} ${plus_Jakarta_Sans.variable}`}>
        <Providers>
          {/* <Navbar_Component /> */}
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
