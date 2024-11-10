import React from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="container py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-Black"> MY PORTFOLIO </div>
      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 text-grey">
        <li className="menuLink">
          <a href="#hero">Home</a>
        </li>
        <li className="menuLink">
          <a href="#about">About</a>
        </li>
        <li className="menuLink">
          <a href="#projects">Projects</a>
        </li>
        <li className="menuLink">
          <a href="#skills">Skills</a>
        </li>
        <li className="menuLink">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* Mobile Menu Icon */}
      <FiMenu className="text-2xl md:hidden cursor-pointer text-primary" />
    </div>
  );
};

export default Navbar;
















// "use client";

// // File: Navbar.tsx
// import React, { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";


// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="container py-6">
//       <div className="flex justify-between items-center">
//         <div className="text-xl font-bold text-gray-800">Muhammad Tahir Hasni</div>
//         <ul className={`gap-10 lg:gap-16 ${menuOpen ? "block" : "hidden"} md:flex`}>
//           <li className="menuLink">
//             <a href="#hero">Home</a> </li>

//           <li className="menuLink">
//             <a href="#about">About</a>
//           </li>
//           <li className="menuLink">
//             <a href="#projects">Projects</a>
//           </li>
//           <li className="menuLink">
//             <a href="#skills">Skills</a>
//           </li>
//           <li className="menuLink">
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//         <button
//           className="text-2xl md:hidden"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FiX /> : <FiMenu />}
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// import React from 'react'
// import { FiMenu } from "react-icons/fi";

// const Navbar = () => {
//   return (
//     <div className='container pt-8'>
//       <div className='flex justify-between items-centre'></div>
//       <div className='text-xl font-medium'> Muhammad Tahir Hasni </div>
//       <ul className='gap-10 lg:gap-16 hidden md:flex'>
//       <li className='manuLink'> <a href='#hero'> Home </a> </li>
//       <li className='manuLink'> <a href='#about'> About </a> </li>
//       <li className='manuLink'> <a href='#project'> Project </a> </li>
//       <li className='manuLink'> <a href='#skills'> Skills </a> </li>
//       <li className='manuLink'> <a href='#contact'> Contact </a> </li>
//       </ul>
//       <FiMenu />
//     </div>
//   )
// }

// export default Navbar
