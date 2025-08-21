import Link from "next/link";

export default function Footer(){
    return(
        <div>
            <div className="absolute flex flex-col md:flex-row gap-4  bg-[#272727FF] w-full h-auto md:justify-evenly p-12">
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold">Links</h3>
                    <ul className="list-none underline">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/projects">Projetcs</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold">Contact</h3>
                    <ul>
                    <li><u>lyes.lattari@gmail.com</u></li>
                    <li><Link href="https://wa.me/213542858609" target="_blank" className="text-white ">Whatsapp : <u>+213 542 85 86 09</u></Link></li>
                    <li><Link href="https://www.linkedin.com/in/lyes-lattari/" target="_blank" className="text-white underline">LinkedIn</Link></li>
                    <li><Link href="https://github.com/LnZ-11" target="_blank" className="text-white underline">GitHub</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}