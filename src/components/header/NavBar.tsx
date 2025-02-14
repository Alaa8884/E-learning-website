"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

import NavBarLinks from "./NavBarLinks";
import MobileNavBar from "./MobileNavBar";

function NavBar() {
  const path = usePathname();

  return (
    <nav className="flex h-[73px] items-center justify-between px-0 py-4 md:h-[81px] md:px-[60px] md:pb-5 md:pt-4 lg:h-[99px] lg:px-[132px] lg:pb-6 lg:pt-5">
      <div className="flex items-center md:h-[45px] md:gap-[5px] lg:h-[55px] lg:gap-[50px]">
        <div className="flex items-center justify-center rounded-lg bg-primary sm:h-10 md:size-[45px] lg:size-[54px]">
          <Link href={"/"}>
            <Image
              src={"/assets/logo.png"}
              alt="logo"
              width={32.5}
              height={32.5}
              className="xs:h-7 object-fill sm:w-7"
            />
          </Link>
        </div>
        <NavBarLinks />
      </div>
      <div className="flex h-[45px] items-center gap-5 lg:h-[55px]">
        <Link
          href="/signup"
          className={cn(
            buttonVariants({
              variant: `${path.includes("/signup") ? "default" : "ghost"}`,
            }),
            "h-[45px] w-[75px] px-6 md:w-auto md:py-3 md:text-sm lg:h-[55px] lg:py-[14px] lg:text-lg",
          )}
        >
          Sign Up
        </Link>

        <Link
          href="/login"
          className={cn(
            buttonVariants({
              variant: `${
                path.includes("/login") || !path.includes("/signup")
                  ? "default"
                  : "ghost"
              }`,
            }),
            "h-[45px] w-auto px-6 md:py-3 md:text-sm lg:h-[55px] lg:py-[14px] lg:text-lg",
          )}
        >
          Login
        </Link>
        <MobileNavBar />
      </div>
    </nav>
  );
}

export default NavBar;
