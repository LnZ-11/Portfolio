"use client"
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";
import WaveBackground from "./components/waveBackground";
import { useState } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const clicked = () => {
    setIsOpen(true? false: true);
  }

  return (
    <html lang="en">
      <body 
      className={"h-auto w-full"}>
        <WaveBackground >
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} onClicking={clicked}/>
          <main 
        className="flex flex-col w-full max-w-5xl gap-4 justify-center text-center text-black"/>
          <div className="relative min-h-screen z-1" onClick={clicked}>
            {children}
          </div>
        <Footer/>
        </WaveBackground>
      </body>
    </html>
  );
}
