
"use client"
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";
import LeafMotifBackground from "./components/leafBackground";
import WaveBackground from "./components/waveBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      className={"h-auto w-full"}>
        <main className="flex flex-col w-full max-w-5xl gap-4 justify-center text-center text-black"/>
        <WaveBackground>
        <Navbar/>
        {children}
        </WaveBackground>
        <Footer/>
      </body>
    </html>
  );
}
