"use client"
import ContactForm from '../components/form';
import Contact from '../components/contact'
import {motion} from "motion/react"

export default function ContactPage() {
  return (
    <div className='w-full flex flex-col gap-12 md:gap-96 items-center content-center pb-12 md:pb-96'>
    <motion.div 
    initial={{ scale: 0 }} 
    animate={{ scale: 1 }} 
    className={"w-11/12 md:w-4/5 text-center content-center md:h-[calc(80vh+120px)]"}
    >
      <div className="w-full md:w-5/6 my-4 mx-auto px-4 md:px-8">
        <div className="backdrop-blur-lg bg-black/40 p-12 rounded-2xl md:[box-shadow:_0_0_10px_white,_0_0_20px_white,_0_0_30px_white] md:border md:border-gray-200">
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center">
            <div className="w-full md:w-[60%]">
              <Contact/>
            </div>
            <div className="hidden md:flex flex-shrink-0 flex flex-col items-center gap-4">
              <div className="hidden md:block w-1 h-96 rounded-full"></div>
            </div>
            <div className="w-full md:w-[40%]">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </div>
  );
}
