import SettingNav from "@/components/Sidebar/Settings/SettingNav";
import SettingsSidebarItem from "@/components/Sidebar/Settings/SettingsSidebarItem";
import React, { type ReactNode } from "react";
import { settings } from "../../utils/contants";

export default function SettingsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SettingNav>
        {settings.map(({ icon, name, subItem }, index) => (
          <SettingsSidebarItem
            key={index}
            icon={icon}
            name={name}
            subItem={subItem}
          />
        ))}
      </SettingNav>

      <div className="ml-[225px] overflow-hidden">
        <div className="bg-defaultBg border-subtle mb-16 flex  rounded-md border">
          {children}
        </div>
      </div>
    </>
  );
}
