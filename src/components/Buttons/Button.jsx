import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  variant = "primary",
  className,
  href,
  download,
  ...rest
}) => {
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
      <a
        href={href}
        {...(download ? { download } : {})}
        className={combinedClasses}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
