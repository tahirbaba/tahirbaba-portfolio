import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-cover bg-no-repeat bg-[url(/hero-section.jpg)]"data-aos="zoom-in-down"
      style={{ backgroundSize: "cover", backgroundPosition: "centre" }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 items-center h-[calc(100vh-80px)]">
        {/* Empty div for image balance */}
        <div className="hidden lg:block"></div>
        {/* Hero Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-green"data-aos="zoom-in-down">
            I am <br /> Muhammad <br /> Tahir Hasni
          </h1>
          <p className="mt-4 text-lg text-white"data-aos="zoom-in-down">
            Passionate Web Developer crafting elegant user interfaces.
          </p>
          <button className="mt-6 px-6 py-3 bg-accent text-white rounded-lg hover:bg-green-600 transition">
            Explore My Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;






// // File: Hero.tsx
// import React from "react";
// import Navbar from "./Navbar";

// const Hero = () => {
//   return (
//     <div
//       id="hero"
//       className="min-h-screen bg-cover bg-no-repeat bg-[url(/profile.jpg)]"
//       style={{ backgroundSize: "cover", backgroundPosition: "centre" }}
//     >
//       <Navbar />
//       <div className="container grid lg:grid-cols-2 h-[calc(100vh-80px)]">
//         <div className="hidden lg:block"></div>
//         <div className="text-[50px] sm:text-[70px] font-bold leading-tight flex justify-center items-center">
//           <div className="space-y-4">
//             <p className="text-accent">I am</p>
//             <p className="text-gray-800">Muhammad</p>
//             <p className="text-gray-800">Tahir Hasni</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;





// import React from 'react'
// import Navbar from './Navbar'

// const Hero = () => {
//   return (
//     <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/profile.jpg)] bg cover'
//     style={{backgroundSize: '35%', backgroundPosition: "left 100px top 100px"}}
//     >
//       <Navbar />
//       <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'> 
//         <div className='hidden lg:block'></div>
//         <div className='text-[70px] sm:-text-[100px] font-bold leading-tight flex justify-centre items-centre'>
//           <div>
//             <p>I am </p>
//             <p> Muhammad </p>
//             <p> Tahir Hasni </p>
//           </div>
//         </div>
//       </div>
 
//     </div>
//   )
// }

// export default Hero
