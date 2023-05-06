"use client";
import React, { type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Inter } from "next/font/google";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";

type Props = {
  children: ReactNode | ReactNode[] | undefined | null;
};
const inter = Inter({
  weight: ["500"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const SettingNav = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav
      className={`${inter.className} no-scrollbar bg-muted bottom-0 left-0 top-0 z-20 flex max-h-screen h-screen static w-56 max-w-56 flex-col space-y-1 overflow-x-hidden overflow-y-scroll px-2 pb-3 transition-transform max-lg:z-10 lg:sticky lg:flex -translate-x-full opacity-0 lg:translate-x-0 lg:opacity-100`}
    >
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            router.back();
          }}
          className="hover:bg-subtle max-w-full [&[aria-current='page']]:bg-emphasis [&[aria-current='page']]:text-emphasis group-hover:text-default text-emphasis group my-6 flex h-6 max-h-6 w-64 flex-row items-center rounded-md py-2 px-3 text-sm font-medium leading-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#374151"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 stroke-[2px] mr-[10px] rtl:ml-[10px] md:mt-0"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <p title="back" className="max-w-36 min-h-4 truncate">
            Back
          </p>
        </button>
        <div>
          <div className="h-[36px] w-full flex">
            <Avatar className="w-[17px] h-[17px] ml-4 my-auto">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="my-auto mx-[10px] font-medium leading-5 text-emphasis text-[0.875rem]">
              Amit Parmar
            </span>
          </div>

          <Link
            href="/settings/my-account/profile"
            className={`font-medium leading-5 flex px-[11px] text-[0.875rem] ml-8 pt-[4px] justify-start h-[32px] w-[158px] mx-auto hover:bg-subtle rounded-md my-1 ${
              pathname === "/settings/my-account/profile" ? "bg-emphasis" : ""
            }`}
          >
            Profile
          </Link>
        </div>
        {children}
      </div>
    </nav>
  );
};

export default SettingNav;
