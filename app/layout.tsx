
"use client"
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";
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
          <div className="relative min-h-screen z-1">

        <Navbar/>
        {children}
          </div>
        </WaveBackground>
        <Footer/>
      </body>
    </html>
  );
}
