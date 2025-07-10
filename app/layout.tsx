
"use client"
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";
import LeafMotifBackground from "./components/leafBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      className={"h-auto w-full"}>
        <Navbar/>
        <main className="flex flex-col w-full max-w-5xl mx-auto gap-4 h-auto justify-center text-center text-black my-12"></main>
        <LeafMotifBackground>
        {children}
        </LeafMotifBackground>
        <main/>
        <Footer/>
      </body>
    </html>
  );
}
