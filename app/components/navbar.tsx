import {FaLaptopCode } from 'react-icons/fa';
import { FaEnvelope } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

export default function navbar(){
return(
  <nav className="sticky top-0 z-50 rounded-lg border shadow-lg overflow-hidden p-2 bg-white border-stone-200 shadow-stone-950/5 mx-auto w-full max-w-screen-xl">
  <div className="flex items-center">
  <Link href="/" className="font-sans antialiased text-sm text-black ml-2 mr-2 block py-1 font-semibold">Material Tailwind</Link>
  <hr className="mx-1 hidden h-5 w-px border-l border-t-0 border-secondary-dark lg:block" />
  <div className="hidden lg:block">
  <div className="min-w-60 mt-4 flex flex-col gap-1 md:text-center md:mt-0 md:flex-row md:items-center">
  <div className="flex flex-row justify-center text-center" data-dui-placement="bottom-start">
  </div>
        <Link href="/projects" className="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-stone-600 hover:text-stone dark:hover:text-black hover:bg-stone-200 focus:bg-stone-200 focus:text-stone-800 dark:focus:text-black dark:data-[selected=true]:text-white dark:bg-opacity-70">
          <span className="grid place-items-center shrink-0 me-2.5 mr-1.5"><FaLaptopCode/></span>
          <small className="font-sans antialiased text-sm text-current">Projects</small>
        </Link>
        <Link href="/contact" className="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-stone-600 hover:text-stone dark:hover:text-black hover:bg-stone-200 focus:bg-stone-200 focus:text-stone-800 dark:focus:text-black dark:data-[selected=true]:text-white dark:bg-opacity-70">
          <span className="grid place-items-center shrink-0 me-2.5 mr-1.5"><FaEnvelope/></span>
          <small className="font-sans antialiased text-sm text-current">Contact</small>
        </Link>
        <Link href="#" className="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-stone-600 hover:text-stone dark:hover:text-black hover:bg-stone-200 focus:bg-stone-200 focus:text-stone-800 dark:focus:text-black dark:data-[selected=true]:text-white dark:bg-opacity-70">
          <span className="grid place-items-center shrink-0 me-2.5 mr-1.5">
          </span>
          <small className="font-sans antialiased text-sm text-current">Docs</small>
        </Link>
      </div>
    </div>
    <button data-dui-toggle="collapse" data-dui-target="#navbar-collapse" aria-expanded="false" aria-controls="navbar-collapse" className="place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[34px] min-h-[34px] rounded-md bg-transparent border-transparent text-stone-800 hover:bg-stone-200/10 hover:border-stone-600/10 shadow-none hover:shadow-none ml-auto mr-2 grid lg:hidden">
    </button>
    <Image src="/Images/profilePic.png" alt="profile-picture" width={32} height={32} className="inline-block object-cover object-center w-8 h-8 rounded outline-none group border border-stone-800 p-0.5 lg:ml-auto" />
  </div>
  <div className="overflow-scroll transition-[max-height] duration-300 ease-in-out max-h-0 lg:hidden" id="navbar-collapse">
    <div className="min-w-60 mt-4 flex flex-col gap-1">
      <Link href="#" className="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-stone-600 hover:text-stone-800 dark:hover:text-white hover:bg-stone-200 focus:bg-stone-200 focus:text-stone-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
        <span className="grid place-items-center shrink-0 me-2.5"><FaLaptopCode/></span>
        <small className="font-sans antialiased text-sm text-current">Account</small>
      </Link>
      <Link href="#" className="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-stone-600 hover:text-stone-800 dark:hover:text-white hover:bg-stone-200 focus:bg-stone-200 focus:text-stone-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
        <span className="grid place-items-center shrink-0 me-2.5"><FaLaptopCode/></span>
        <small className="font-sans antialiased text-sm text-current">Blocks</small>
      </Link>
      <Link href="#" className="flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-stone-600 hover:text-stone-800 dark:hover:text-white hover:bg-stone-200 focus:bg-stone-200 focus:text-stone-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
        <span className="grid place-items-center shrink-0 me-2.5"><FaLaptopCode/></span>
        <small className="font-sans antialiased text-sm text-current">Docs</small>
      </Link>
    </div>
  </div>
</nav>
)
}