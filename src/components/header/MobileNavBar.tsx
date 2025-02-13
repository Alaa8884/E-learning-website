import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AlignRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

function MobileNavBar() {
  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size={"icon"}
            className="md:size-[45px] lg:size-[54px] [&_svg]:size-7"
          >
            {" "}
            <AlignRight size={45} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
            <SheetDescription className="sr-only"></SheetDescription>
          </SheetHeader>
          <ul className="flex flex-col items-start gap-8 py-4">
            {navData.map((nav) => (
              <li
                className={cn(
                  "hover:transition-500 flex-grow gap-8 text-lg font-semibold hover:scale-y-150 hover:text-primary hover:transition-all",
                )}
                key={nav.title}
              >
                <SheetClose asChild>
                  <Link href={nav.href}>{nav.title}</Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavBar;
