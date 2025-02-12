import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="text-center">
      <h1
        className="inline-block  mt-20 pb-2 font-poppins text-5xl font-bold tracking-widest 
                   bg-white text-transparent bg-clip-text
                   border-b-4 border-blue-600
                   transition transform duration-500 hover:scale-105 hover:shadow-2xl"
      >
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
