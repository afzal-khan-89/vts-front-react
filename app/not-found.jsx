import Image from "next/image";
import Link from "next/link";
import noResult from "../components/icons/no-result.svg";
import { Routes } from "../config/routes";

const NotFound = ({
  title = "Error code: 404",
  subTitle = "Oops! Looks like this isn't a page",
  image = noResult,
  link = Routes.home,
  linkTitle = "Take me home",
}) => {
  return (
    <div className="grid min-h-screen place-items-center p-4 sm:p-8">
      <div className="text-center">
        {title ? (
          <p className="2xl: mb-4 text-sm uppercase tracking-widest text-body-dark sm:mb-5">
            {title}
          </p>
        ) : (
          ""
        )}
        {subTitle ? (
          <h1 className="mb-5 text-2xl font-bold leading-normal text-bolder sm:text-3xl">
            {subTitle}
          </h1>
        ) : (
          ""
        )}
        {image ? (
          <div className="mb-11">
            <Image src={image} alt={title} />
          </div>
        ) : (
          ""
        )}
        {link ? (
          <Link
            href={link}
            className="inline-flex items-center text-bolder underline hover:text-body-dark hover:no-underline focus:outline-none sm:text-base"
          >
            {linkTitle}
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NotFound;
