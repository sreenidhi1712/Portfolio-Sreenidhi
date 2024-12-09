import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/NavbarComponent/Navbar";

// Load local fonts
const geistSans = localFont({
  src: "/fonts/GeistVF.woff", // Corrected path for fonts
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff", 
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for SEO
export const metadata = {
  title: "Sreenidhi D's Portfolio",
  description: "Crafting intuitive and dynamic web experiences with a passion for clean code and modern design. Eager to bring creativity and technical skills to innovative projects.",
  keywords: "Sreenidhi D, Web Developer, React.js, Next.js, Sreenidhi D Portfolio, Sreenidhi D LinkedIn, Sreenidhi D GitHub, Sreenidhi D Personal Website",
  icons: {
    icon: "/sreenidhi.jpg"
  },
  openGraph: {
    title: "Sreenidhi D's Portfolio",
    description: "Crafting intuitive and dynamic web experiences with a passion for clean code and modern design. Eager to bring creativity and technical skills to innovative projects.",
    url: "https://sreenidhidev.me/",
    type: "website",
    images: [
      {
        url: "/sreenidhi.jpg",
        width: 800,
        height: 600,
        alt: "Sreenidhi D",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sreenidhi D's Portfolio",
    description: "Crafting intuitive and dynamic web experiences with a passion for clean code and modern design. Eager to bring creativity and technical skills to innovative projects.",
    images: [
      {
        url: "/sreenidhi.jpg",
        alt: "Sreenidhi D",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}