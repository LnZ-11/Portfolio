"use client"
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";
import LeafBackground from "./components/leafBackground";
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
        <LeafBackground >
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} onClicking={clicked}/>
          <main className="flex flex-col m-auto relative min-h-screen z-1 justify-center text-center" onClick={clicked}>
            <div className='w-full flex flex-col gap-24 md:gap-35 items-center content-center pb-12 '>
            {children}
            </div>
          </main>  
        </LeafBackground>
        <Footer/>
      </body>
    </html>
  );
}
