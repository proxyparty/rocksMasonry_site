import { Roboto, Staatliches } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-roboto",
//   subsets: ["latin"],
// });

const roboto = Roboto({
  weight: "400",
  variable: "--font-roboto",
  subsets: ["latin"],
});

const staatliches = Staatliches({
  weight: "400",
  variable: "--font-staatliches",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rocks Masonry",
  description:
    "The most reliable excavation and demolition company in Suffolk and Nassau County, NY",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${staatliches.variable}`}>
        {children}
      </body>
    </html>
  );
}
