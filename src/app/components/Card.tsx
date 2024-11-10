import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<Props> = ({ title, desc, img, tags }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      {/* Project Image */}
      <Image
        src={img}
        width={350}
        height={200}
        alt={title}
        className="w-full object-cover"
      />
      {/* Project Details */}
      <div className="p-4">
        <h3 className="text-2xl font-bold text-primary">{title}</h3>
        <p className="text-textSecondary mt-2">{desc}</p>
        <div className="mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-accent text-white text-sm px-3 py-1 rounded-full mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;



// // File: Card.tsx
// import React from "react";
// import Image from "next/image";

// interface PropsType {
//   title: string;
//   desc: string;
//   img: string;
//   tags: string[];
// }

// const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
//   return (
//     <div className="border border-accent rounded-lg overflow-hidden shadow-lg">
//       <div className="relative">
//         <Image
//           className="w-full object-cover"
//           src={img}
//           width={350}
//           height={350}
//           alt={title}
//         />
//       </div>
//       <div className="p-4 space-y-4">
//         <h3 className="text-xl font-semibold">{title}</h3>
//         <p className="text-gray-600">{desc}</p>
//         <div className="flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <span
//               key={tag}
//               className="px-2 py-1 bg-accent text-white rounded-md text-sm"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;




// import React from 'react'
// import Image from 'next/image';
// interface propsType {
//     title: string;
//     desc: string;
//     img: string;
//     tags: string[];

// }

// const Card: React.FC<propsType> = ({title, desc, img, tags}) => {
//   return (
//     <div className='border border-accent w-[300px] sm:w-[350px]'>
//       <div>
//         <Image className='w-[300px] sm:w-[350px] sm:w-[350px] h-auto'
//         src={img}
//         width={350}
//         height={350}
//         alt={title}
//         />
//       </div>

//       <div className='p-4 space-y-4'>
//         <div className='text-4xl font-extralight'>{title}</div>
//         <div>{desc}</div>
//         <div>
//             {tags.map((el) =>(
//                 <div className='tags' key={el}>
//                     {el}
//                 </div>))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Card
