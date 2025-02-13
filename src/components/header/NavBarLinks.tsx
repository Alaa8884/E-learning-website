import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

const navData: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Courses",
    href: "/courses",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Pricing",
    href: "pricing",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

function NavBarLinks() {
  const path = usePathname();

  return (
    <div className="hidden items-center md:gap-4 lg:flex lg:gap-[26px]">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            {navData.map((item) => (
              <Link key={item.href} href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "w-auto md:h-[45px] md:px-5 md:py-3 md:text-sm lg:h-[55px] lg:px-6 lg:py-[14px] lg:text-lg",
                  )}
                  active={path.includes(item.href)}
                >
                  {item.title}
                </NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default NavBarLinks;
