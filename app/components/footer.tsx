import Link from "next/link";

export default function Footer(){
    return(
        <div>
            <div className="absolute flex flex-row  bg-[#0b8a43] w-full h-auto justify-evenly p-12">
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold">Liens utiles</h3>
                    <ul className="list-none">
                        <li><Link href="/">Accueil</Link></li>
                        <li><Link href="/about">A propos</Link></li>
                        <li><Link href="/projects">Projets</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold">Contact</h3>
                    <p>lyes.lattari@gmail.com</p>
                    <Link href="https://wa.me/213542858609" target="_blank" className="text-white">Whatsapp : +213 542 85 86 09</Link>
                    <Link href="https://www.linkedin.com/in/lyes-lattari/" target="_blank" className="text-white">LinkedIn</Link>
                    <Link href="https://github.com/LnZ-11" target="_blank" className="text-white">GitHub</Link>
                </div>
            </div>
        </div>
    );
}