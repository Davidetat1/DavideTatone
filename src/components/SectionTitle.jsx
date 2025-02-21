import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="text-center">
      <h1
        className="inline-block my-10 md:my-20 pb-3 font-poppins text-5xl md:text-6xl font-bold 
                   bg-white text-transparent bg-clip-text
                   border-b-8 border-[#f8f6f4]
                   transition transform duration-500 hover:scale-105 hover:shadow-2xl"
      >
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
