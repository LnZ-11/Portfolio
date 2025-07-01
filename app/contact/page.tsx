"use client"
import ContactForm from '../components/form';
import Contact from '../components/contact'

export default function ContactPage() {
  return (
    <div className=" flex items-center justify-center p-6">
      <div className="w-full max-w-md flex flex-col gap-4 bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm space-y-4">
        <Contact/>
        <h1 className="text-2xl font-bold text-gray-700 text-center">OR</h1>
        <ContactForm />
      </div>
    </div>
  );
}
