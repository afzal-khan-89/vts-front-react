import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { siteSettings } from "../../config/site";

const Logo = ({ className, ...props }) => {
  const { logo } = siteSettings;

  return (
    <Link href={logo.href} className={cn("inline-flex", className)} {...props}>
      <span className="relative h-[2.125rem] w-32 overflow-hidden md:w-[8.625rem]">
        <Image
          src={logo.url}
          alt={logo.alt}
          fill
          sizes="(max-width: 768px) 100vw"
          loading="eager"
          className="object-contain"
          priority={true}
        />
      </span>
    </Link>
  );
};

export default Logo;
