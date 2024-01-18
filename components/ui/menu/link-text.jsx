"use client";

import { usePathname } from "next/navigation";

const LinkTextWithActiveStatus = ({ text, href }) => {
  const pathname = usePathname();
  return <span className={href === pathname ? "text-accent" : ""}>{text}</span>;
};

export default LinkTextWithActiveStatus;
