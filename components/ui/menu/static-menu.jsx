import Link from "next/link";
import { siteSettings } from "../../../config/site";
import { ArrowDownIcon } from "../../icons/arrow-down";
import LinkTextWithActiveStatus from "./link-text";

const StaticMenu = () => {
  const { headerLinks } = siteSettings;
  return (
    <>
      {headerLinks?.slice(0, 2)?.map(({ href, label, icon }) => (
        <li key={`${href}${label}`}>
          <Link
            href={href}
            className="flex items-center font-normal text-heading no-underline transition duration-200 hover:text-accent focus:text-accent"
          >
            <LinkTextWithActiveStatus text={label} href={href} />
          </Link>
        </li>
      ))}
      <li className="menuItem group relative mx-3 cursor-pointer py-3 xl:mx-4">
        <div className="flex items-center gap-2 group-hover:text-accent">
          <span className="text-brand-dark group-hover:text-brand relative inline-flex items-center py-2 font-normal rtl:left-0">
            Products
          </span>
          <ArrowDownIcon className="mt-1" />
        </div>
        <ul className="shadow-dropDown invisible absolute top-full z-30 w-[220px] rounded-md bg-light py-4 opacity-0 shadow transition-all duration-300 group-hover:visible group-hover:opacity-100 ltr:left-0 rtl:right-0 xl:w-[240px]">
          {headerLinks
            ?.slice(6, headerLinks?.length)
            ?.map(({ href, label }, index) => (
              <li
                className="menu-child-item font-chivo hover:filter-green group py-[10px] px-[22px] transition-all duration-200 hover:pl-[25px] hover:opacity-100"
                key={index}
              >
                <Link
                  href={href}
                  className="flex items-center font-normal text-heading no-underline transition duration-200 hover:text-accent focus:text-accent"
                >
                  {label}
                </Link>
              </li>
            ))}
        </ul>
      </li>
      {headerLinks?.slice(3, 6)?.map(({ href, label, icon }) => (
        <li key={`${href}${label}`}>
          <Link
            href={href}
            className="flex items-center font-normal text-heading no-underline transition duration-200 hover:text-accent focus:text-accent"
          >
            <LinkTextWithActiveStatus text={label} href={href} />
          </Link>
        </li>
      ))}
    </>
  );
};

export default StaticMenu;
