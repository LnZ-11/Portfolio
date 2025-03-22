"use client"
import ContactForm from '../components/form';

export default function ContactPage() {
  return (
    <div className=" flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <ContactForm />
      </div>
    </div>
  );
}
