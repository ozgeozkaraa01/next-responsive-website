import Link from "next/link";
import clsx from "clsx";

const Logo = ({ className, props }) => {
  return (
    <Link href={"/"}>
      <h2
        className={clsx(
          "text-3xl font-bold text-gray-800 duration-300",
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
