"use client"
import ContactForm from '../components/form';
import Contact from '../components/contact'
import {motion} from "motion/react"

export default function ContactPage() {
  return (
    <motion.div 
    initial={{ scale: 0 }} 
    animate={{ scale: 1 }} 
    className={"w-full"}
    >
      <div className="w-full w-5/6 my-4 mx-auto px-4">
        <div className="backdrop-blur-lg bg-black/40 p-12 rounded-2xl shadow-lg border border-gray-200">
          <div className="flex flex-row gap-12 items-center">
            <div className="w-[60%]">
              <Contact/>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              <div className="w-1 h-96 bg-gray-700 rounded-full"></div>
            </div>
            <div className="w-[40%]">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
