import React from "react";
import img from "/src/assets/img/UBI.jpg";
// import Button from "../layouts/Button";

const About = () => {
    return (
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
        <img src={img} alt="img"  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto"/>
  
        <div className=" space-y-4 lg:pt-14">
          <h1 className=" font-semibold text-4xl text-center md:text-start">
            Neden Biz?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            architecto quisquam delectus minima perferendis nulla quia nisi
            laborum, exercitationem cum quo accusantium, impedit sed. Dicta, quo
            molestias omnis reprehenderit quae animi? Explicabo quasi accusamus
            laboriosam temporibus delectus, aut a? Quasi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
            suscipit reiciendis accusamus recusandae eum aspernatur pariatur odit
            veritatis facere. Magnam!
          </p>
          <div className=" flex justify-center lg:justify-start">
            {/* <Button title="Learn More" /> */}
          </div>
        </div>
      </div>
    );
  };
  
  export default About;