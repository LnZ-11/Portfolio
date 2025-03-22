export default function Footer(){
    return(
        <div>
            <div className="absolute flex flex-row  bg-[#0b8a43] w-full h-auto justify-evenly p-12">
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold">Liens utiles</h3>
                    <ul className="list-none">
                        <li><a href="#">Histoire</a></li>
                        <li><a href="#">Certification BIO</a></li>
                        <li><a href="#">Collaborations</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold">Contact</h3>
                    <p>contact@bloom.com</p>
                    <p>+33 1 84 17 18 19</p>
                    <p>12, rue de l'industrie, 75011 Paris</p>
                </div>
            </div>
        </div>
    );
}