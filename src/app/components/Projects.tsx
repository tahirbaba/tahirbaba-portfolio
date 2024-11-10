import Card from './Card'; // Assuming you have a Card component
import Heading from './Heading';

// import { AiOutlineMail } from 'react-icons/ai';
const Projects = () => {
  const projects = [
    {
            title: "Digital Clock",
            desc: "A modern portfolio built with Next.js and Tailwind CSS.",
            img: "/digital-clock.jpg",
            tags: ["Next.js", "Tailwind", "React"],
          },
          {
            title: "Simple Calculator",
            desc: "An online store with payment gateway integration.",
            img: "/simple-calculator.jpg",
            tags: ["TypeScript", "Node.js", "Express"],
          },
          {
            title: "Static Resume Builder",
            desc: "A feature-rich app for connecting people.",
            img: "/static-resume-builder.WEBP",
            tags: ["MongoDB", "React", "Firebase"],
          },
    // Add more projects here
  ];

  return (
    <div id="projects" className="container py-20"data-aos="zoom-in-down">
      <Heading title="Projects" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"data-aos="zoom-in-down">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            desc={project.desc}
            img={project.img}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;



// import React from "react";
// import Card from "./Card";
// import Heading from "./Heading";

// const projects = [
//   {
//     title: "Digital Clock",
//     desc: "A modern portfolio built with Next.js and Tailwind CSS.",
//     img: "/digital-clock.jpg",
//     tags: ["Next.js", "Tailwind", "React"],
//   },
//   {
//     title: "Simple Calculator",
//     desc: "An online store with payment gateway integration.",
//     img: "/simple-calculator.jpg",
//     tags: ["TypeScript", "Node.js", "Express"],
//   },
//   {
//     title: "Static Resume Builder",
//     desc: "A feature-rich app for connecting people.",
//     img: "/static-resume-builder.jpg",
//     tags: ["MongoDB", "React", "Firebase"],
//   },
// ];

// const Projects = () => {
//   return (
//     <div id="projects" className="container py-20">
//       <Heading title="Projects" />
//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project) => (
//           <Card key={project.title} {...project} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;




// import React from "react";
// import Heading from "./Heading";
// import Card from "./Card";

// // Updated data to fix image paths and ensure accuracy
// const data = [
//   {
//     id: 0,
//     title: "Static Resume Builder",
//     desc: "A CV Type Project, built using a Next.js setup.",
//     img: "/static-resume-builder.jpg", // Fixed the image path
//     tags: ["Node", "HTML", "CSS", "TypeScript"],
//   },
//   {
//     id: 1,
//     title: "Digital Clock",
//     desc: "A Digital Clock, created with HTML, CSS, and TypeScript.",
//     img: "/digital-clock.jpg", // Fixed the image path
//     tags: ["Node", "HTML", "CSS", "TypeScript"],
//   },
//   {
//     id: 2,
//     title: "Calculator",
//     desc: "A Simple Calculator, built using HTML, CSS, and TypeScript.",
//     img: "/simple-calculator.jpg", // Fixed the image path
//     tags: ["Node", "HTML", "CSS", "TypeScript"],
//   },
// ];

// const Projects = () => {
//   return (
//     <div id="projects" className="container pt-32">
//       {/* Added the heading for the projects section */}
//       <Heading title="My Projects" />
//       <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
//         {/* Rendering Card components dynamically */}
//         {data.map((el) => (
//           <Card key={el.id} title={el.title} desc={el.desc} img={el.img} tags={el.tags} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;





// import React from 'react';
// import Heading from './Heading';
// import Card from './Card';

// const data = [
//     {
//         id: 0,
//         title: "Static Resume Builder",
//         desc: "A CV Type Project, making by Next.js setup",
//         img: ".images/simple-calculator.jpg ",
//         tags: ["Node" , "HTML" , "CSS" , "TypeScript"],
//     },
//     {
//         id: 1,
//         title: "Digital Clock",
//         desc: "A Digital Clock, making by HTML , CSS & TypeScript",
//         img: "/digital-clock.jpg ",
//         tags: ["Node" , "HTML" , "CSS" , "TypeScript"],
//     },
//     {
//         id: 2,
//         title: "Calculator",
//         desc: "A Simple-Calculator, making by HTML , CSS & TypeScript",
//         img: "/static-resume-builder.jpg ",
//         tags: ["Node" , "HTML" , "CSS" , "TypeScript"],
//     },
// ]

// const Projects = () => {
//   return (
//     <div id='projects' className='container pt-32'>
//       <Heading title='My Projects' />
//       <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-clos-3 place-items-centre'>
//         {data.map((el) => (<Card
//         key={el.id}
//         title={el.title}
//         desc={el.desc}
//         img={el.img}
//         tags={el.tags}
//         />))}
//       </div>
//     </div>
//   )
// }

// export default Projects
