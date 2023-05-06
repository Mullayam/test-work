import React from "react";

import { useRouter } from "next/router";
import { FiKey } from "react-icons/fi";
import { SlEnvolopeLetter } from "react-icons/sl";
import { HiCode } from "react-icons/hi";
import { AiOutlineTeam } from "react-icons/ai";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Input } from "@/components/ui/input";
import Sidebar from "@/components/Sidebar/Sidebar";
import Menubar from "@/components/Editor/Menubar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { home } from "@/utils/contants";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import DropDown from "@/components/ui/DropDown";

const Create = () => {
    const router = useRouter();
    const [employee, setEmployee] = React.useState("");

    const handleChange = (event) => {
        setEmployee(event.target.value);
    };

    return (
        <>
            {/* <Sidebar>
                {
                    home.map((item, index) => (
                        <SidebarItem key={index} {...item} />
                    ))
                }
            </Sidebar> */}

            <div className="max-w-fit ">
                <form className="border-[1px] border-lightgrayBg rounded-lg p-4">
                    <div className="flex">
                        <div className="w-[250px] h-[37px] m-2">
                            <Input type="text" placeholder="Company Name" />
                        </div>

                        <div className="w-[320px] h-[37px] m-2">
                            <Input type="text" placeholder="Tagline" />
                        </div>

                        <div className="w-[92px] h-[37px] m-2">
                            <Input type="text" placeholder="Funding" />
                        </div>

                        <div className="w-[92px] h-[37px] m-2">
                            <DropDown
                                text={"No. of E"}
                                options={["1-10", "11-25", "26-50", "51-100", "100+"]}
                            />
                        </div>

                        <div className="w-[92px] h-[37px] m-2">
                            <DropDown text="No. of M"
                                options={["1-10", "11-25", "26-50", "51-100", "100+"]} />
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-[320px] h-[37px] m-2">
                            <Input />
                        </div>

                        <div className="w-[500px] h-[37px] m-2 my-auto leading">
                            <Input placeholder="Tagline" />
                        </div>

                        <div className="flex">

                            <Checkbox className="my-auto" />
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-[320px] h-[340px] max-h-[340px] m-2">
                            <Menubar placeholder="About Company" />
                        </div>

                        <div className="w-[550px] h-[340px] max-h-[340px] m-2">
                            <Menubar placeholder="description" />
                        </div>
                    </div>

                    <div className="flex justify-end w-[875px]">
                        <Button type="submit">Save</Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Create;
