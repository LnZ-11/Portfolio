"use client"
import ContactForm from '../components/form';
import Contact from '../components/contact'
import NeonFrame from '../components/neonFrame';

export default function ContactPage() {
  return (

    <NeonFrame>
            <div className="w-full md:w-[60%]">
              <Contact/>
            </div>
            <div className="hidden md:flex flex-shrink-0 flex flex-col items-center gap-4">
              <div className="hidden md:block w-1 h-96 rounded-full"></div>
            </div>
            <div className="w-full md:w-[40%]">
              <ContactForm />
            </div>
    </NeonFrame>
  );
}
