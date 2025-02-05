import { twMerge } from 'tailwind-merge';

const Button = ({ children, variant = "primary", 
  className }) => {

    const variants = { 
      primary: "bg-circular-gradient text-white/90 border-1 hover:bg-blue-700",
      outline:
      "bg-transparent text-blue-300 border-1 border-blue-300 hover:text-white hover:bg-blue-700",
    };

  return (
  < button
   className={twMerge(
    `rounded-full px-5 py-1 mx-2 whitespace-nowrap font-poppins ${variants[variant]}`, 
    className
   )}
    >
    {children}
    </button>
  );
};

export default Button;