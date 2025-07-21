"use client"
import { useForm,Controller } from "react-hook-form";
import { useState } from "react";
import {z} from "zod";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import {zodResolver} from "@hookform/resolvers/zod";
import { motion } from "motion/react"


export default function ContactForm() {
    // Define the schema for the form with zod
  const formSchema = z.object({
    name: z.string().nonempty(),
    email: z.string().email("invalide format").nonempty(),
    phone: z.string().nonempty(),
    message: z.string().nonempty(),
  });
    // typing the form data
  type FormData = z.infer<typeof formSchema>;
    // use react-hook-form
  const { register, handleSubmit, formState:{errors,isSubmitting},control} = useForm<FormData>({resolver:zodResolver(formSchema)});
    // logging results
  const [feedback, setFeedback] = useState("");
  const onSubmit = async (data: FormData) => {
    setFeedback("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erreur d'envoi");
      setFeedback("Sent");
    } catch (error) {
      setFeedback("Error");
      console.log(error);
    }
  };
  return (
    <form  className="flex justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6 p-6 max-w-2xl mx-auto">
        <div className="flex flex-row gap-6">
          <div className="flex flex-col w-full">
            <h2 className="text-2xl font-bold text-gray-700 md:text-white mb-2">Name</h2>
            <input 
              type="text" 
              id="name" 
              {...register("name")}
              className="w-full border border-gray-300 text-black md:text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col w-full">
            <h2 className="text-2xl font-bold text-gray-700 md:text-white mb-2">Email</h2>
            <input 
              type="email" 
              id="email" 
              {...register("email",)}
              className="w-full border border-gray-300 text-black md:text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Phone</h2>
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <div className="w-full">
                <PhoneInput 
                  {...field} 
                  defaultCountry="ca" 
                  className="w-full p-4 rounded-lg text-black md:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
            )}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Message</h2>
          <textarea 
              id="message" 
              {...register("message")}
              className="w-full border border-gray-300 text-black md:text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your message"
              rows={4}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>
        {/* Feedback */}
        {feedback && <p className="text-center font-medium">{feedback}</p>}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}  
          type="submit"
          disabled={isSubmitting}
          className={`w-1/2  mx-auto text-white py-3 rounded-lg font-semibold transition-all ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[#0b8a43] hover:bg-[#14a550]"}`}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </motion.button>
      </div>
    </form>
  )
}