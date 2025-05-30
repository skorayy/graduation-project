// import React from "react";
// import { BsStarFill, BsStarHalf } from "react-icons/bs";
// import  Button from "/src/layouts/Button.jsx";

// const MekanlarCard = (props) => {
//   return (
//     <div className=" w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,.24)_0px_3px_8px] rounded-lg ">
//       <img className=" rounded-xl" src={props.img} alt="img" />
//       <div className=" space-y-4">
//         <h3 className="font-semibold text-center text-xl pt-6">{props.title} </h3>
//         <div className=" flex flex-row justify-center">
//           <BsStarFill className=" text-brightColor"/>
//           <BsStarFill className=" text-brightColor"/>
//           <BsStarFill className=" text-brightColor"/>
//           <BsStarFill className=" text-brightColor"/>
//           <BsStarHalf className=" text-brightColor"/>
//         </div>
//         <div className="flex flex-row items-center justify-center gap-4">
//           <h3  className="font-semibold text-lg">{props.price}</h3>
//           {/* <Button title="Buy Now" /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MekanlarCard;
import React from "react";

const MekanlarCard = ({ img, title, kategori, konum }) => {
  return (
    <div className="w-72 bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={img || "https://via.placeholder.com/300x200?text=Resim+Yok"}
        alt={title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">Kategori: {kategori}</p>
        <p className="text-gray-600">Konum: {konum}</p>
      </div>
    </div>
  );
};

export default MekanlarCard;
