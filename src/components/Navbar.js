import React, { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
 const [isOpen, setIsOpen] = useState(false);


 return (
   <nav className="bg-white">
     <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
       <div className="relative flex items-center justify-between h-16">
         <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
           <div className="flex-shrink-0 flex items-center">
             <Link to="/">
               <img className="block lg:hidden h-8 w-auto" alt="Logo" />
               <img className="hidden lg:block h-8 w-auto" alt="Logo" />
             </Link>
           </div>
           <div className="hidden sm:block sm:ml-6">
             <div className="flex space-x-4 justify-between">
               <Link
                 to="/"
                 className="text-black hover:bg-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                 activeClassName="bg-gray-900 text-white"
                 exact
               >
                 Home
               </Link>
               <Link
                 to="/about"
                 className="text-black hover:bg-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                 activeClassName="bg-gray-900 text-white"
               >
                 About
               </Link>
               <Link
                 to="/contact"
                 className="text-black hover:bg-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                 activeClassName="bg-gray-900 text-white"
               >
                 Contact
               </Link>
             </div>
           </div>
         </div>
         <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
           <button
             type="button"
             className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
             aria-controls="mobile-menu"
             aria-expanded="false"
             onClick={() => setIsOpen(!isOpen)}
           >
             <span className="sr-only">Open main menu</span>
             {isOpen ? (
               <svg
                 className="block h-6 w-6"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
                 aria-hidden="true"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M6 18L18 6M6 6l12 12"
                 />
               </svg>
             ) : (
               <svg
                 className="block h-6 w-6"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
                 aria-hidden="true"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M4 6h16M4 12h16M4 18h16"
                 />
               </svg>
             )}
           </button>
         </div>
       </div>
     </div>
   </nav>
 );
}


export default Navbar;
