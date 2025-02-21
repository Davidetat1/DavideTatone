import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  className,
  href,
  download,
  ...rest
}) => {
  const buttonVariants = {
    hover: {
      scale: 1.04,
      transition: {
        type: "spring",
        stiffness: "300",
        damping: 7,
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  const variants = {
    primary: "bg-circular-gradient text-white/90 border-1 hover:bg-customBlue",
    white:
      "bg-white text-customBlue border-1 border-blue-400 hover:text-customblue hover:bg-circular-gradient",
  };

  const baseClasses =
    "rounded-full px-4 py-1 mx-2 whitespace-nowrap font-poppins font-normal tracking-wide";
  const combinedClasses = twMerge(baseClasses, variants[variant], className);

  if (href) {
    return (
      <motion.a
        href={href}
        {...(download ? { download } : {})}
        className={combinedClasses}
        {...rest}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedClasses}
      {...rest}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      {children}
    </motion.button>
  );
};

export default Button;
