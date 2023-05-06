"use client";
import React from "react";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  icon: string;
  name: string;
  subItem: {
    href: string;
    name: string;
  }[];
}
const SettingsSidebarItem: React.FC<NavItem> = ({ icon, name, subItem }) => {
  const router = usePathname();

  return (
    <div>
      <div className="h-[36px] w-full flex">
        <Image
          alt={name}
          height={25}
          width={25}
          src={icon}
          className="svg_icon rounded-full w-[17px]  h-[17px] ml-[14px] my-auto"
        />
        <span className="my-auto mx-[10px] leading-5 text-emphasis text-sm font-medium">
          {name}
        </span>
      </div>

      {subItem?.map((item, index) => (
        <Link
          key={index}
          href="/profile/:id"
          className={`font-medium leading-5 flex px-[11px] text-[0.875rem] ml-8 pt-[4px] justify-start  h-[32px] w-[158px] mx-auto hover:bg-subtle rounded-md my-1 ${
            router === "/settings/my-profile/profile" ? "bg-gray/25" : ""
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default SettingsSidebarItem;
