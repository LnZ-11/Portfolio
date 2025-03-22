import Carousel from "./carousel";
import Image from "next/image";

interface CardProps {
    image: string;
    invert: boolean;
}

export default function Card({image, invert}: CardProps) {
    return (
        <div className="w-full my-8">
            {invert ? (
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                    <div className="w-full md:w-1/2">
                        <Image 
                            src={image} 
                            alt="Bloom product image" 
                            width={1200} 
                            height={800}
                            className="w-full h-full object-contain rounded-xl shadow-md"
                        />
                    </div>
                    <div className="w-full md:w-1/2 pr-4">
                        <Carousel />
                    </div>
                </div>
            ) : (
                <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full">
                    <div className="w-full md:w-1/2 p-2">
                        <Image 
                            src={image} 
                            alt="Bloom product image" 
                            width={1200} 
                            height={800} 
                            className="w-full h-full object-contain rounded-xl shadow-md"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-2">
                        <Carousel />
                    </div>
                </div>
            )}
        </div>
    );
}