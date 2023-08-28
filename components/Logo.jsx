import Link from "next/link";
import clsx from "clsx";

const Logo = ({ className, props }) => {
  return (
    <Link href={"/"}>
      <h2
        className={clsx(
          "text-2xl md:text-3xl bg-gradient-to-r from-amber-400 to-blue-300 text-transparent bg-clip-text font-bold duration-300",
          className
        )}
        {...props}
      >
        Logo
      </h2>
    </Link>
  );
};

export default Logo;
