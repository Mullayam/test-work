import dynamic from "next/dynamic";

import Sidebar from "@/components/Sidebar/Sidebar";
import { home } from "@/utils/contants";
import SidebarItem from "@/components/Sidebar/SidebarItem";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import Event from "@/components/Events/Event";

const Table = dynamic(() => import("@/components/Table"), {
  ssr: false,
});

export function Happ() {
  const headings = ["company", "Designation", "Experience"];
  const content = [
    {
      company: "CARS24",
      designation: "UI/UX Designer",
      experience: "1-3 yrs",
    },
    {
      company: "CARS24",
      designation: "UI/UX Designer",
      experience: "1-3 yrs",
    },
    {
      company: "CARS24",
      designation: "UI/UX Designer",
      experience: "1-3 yrs",
    },
    {
      company: "CARS24",
      designation: "UI/UX Designer",
      experience: "1-3 yrs",
    },
  ];
}
export default function Home() {
  return (
    <section className="ml-[225px]  py-4 px-4 md:py-8 lg:px-12">
      <div className="flex items-center md:mb-6 md:mt-0 lg:mb-8 mb-0">
        <header className="flex w-full max-w-full items-center truncate">
          <div className="w-full truncate ltr:mr-4 rtl:ml-4 md:block">
            <h3 className="font-cal max-w-28 sm:max-w-72 md:max-w-80 text-emphasis truncate font-semibold tracking-wide sm:text-xl md:block xl:max-w-full text-xl hidden">
              Event Types
            </h3>
            <p className="text-default tracking-wide hidden text-sm md:block">
              Create events to share for people to book on your calendar.
            </p>
          </div>

          <Button className="inline-flex items-center text-sm font-medium relative rounded-full justify-center md:rounded-md transition-transform !shadow-none px-4 py-2.5 hover:bg-[#696969] text-inverted bg-[#292929] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-default text-brand h-14 md:h-9 md:w-auto md:px-4 md:py-2.5">
            <div className="max-h-fit items-center flex flex-row justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hidden font-bold h-4 text-inverted w-4 stroke-[1.5px] ltr:mr-2 ltr:-ml-1 rtl:-mr-1 rtl:ml-2 md:inline-flex"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>

              <span className="ml-1 font-medium items-center justify-center text-inverted relative hidden md:inline">
                New
              </span>
            </div>
          </Button>
        </header>
      </div>
      <div className="w-full">
        <div className="bg-defaultBg  border-subtle mb-16 flex overflow-hidden rounded-md border">
          <ul className="divide-subtle !static w-full divide-y">
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
          </ul>
        </div>
      </div>
    </section>
  );
}
