import { Input } from "@/components/ui/input";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
// import Menubar from "@/components/Editor/Menubar";
type Props = {};

export default function Profile(props: Props) {
  return (
    <main className="min-h-screen flex bg-white w-full">
      <div className="w-full max-w-[995px] mx-auto">
        <h1 className="w-full justify-start text-[1.25rem] text-darkblue font-bold">
          Profile
        </h1>
        <h1 className="text-[0.875rem] text-btntextgray pb-[25px] border-b-[1px] border-lightgray">
          Manage settings for your Cal.com profile
        </h1>

        <div className="flex py-[32px]">
          <img
            className="w-[67px] h-[67px] rounded-full"
            src="https://app.cal.com/teenfounders/avatar.png"
          />
          {/* <Button/> */}

          <button className="w-[130px] h-[32px] font-[500] rounded-md border-[1px] my-auto mx-[16px] text-[0.875rem] border-lightgray">
            Change Avatar
          </button>
        </div>

        <div>
          <h1 className="my-[5px] text-[0.875rem] font-[500]">Username</h1>
          <div className="flex">
            <span className="w-[79px] h-[34px] rounded-l-md border-[1px] border-lightgray bg-[#f9fafb] text-center pt-1  text-[14px] text-[#94958F]">
              cal.com/
            </span>
            <input className="w-full mb-[2px] py-[11px] px-[15px] font-light border-[1px] border-lightgray rounded-r-md h-[34px] border-l-0 focus:outline-none" />
          </div>
        </div>

        {/* <LabelInput
                    text="Full name"
                /> */}
        <Input placeholder="Full name" />
        <Input placeholder="Email" />

        {/* /* <LabelInput
                    text="Email"
                /> */}
        <h1 className="text-btntextgray text-[0.875rem]">
          You may need to log out and back in to see any change take effect
        </h1>
        <h1 className="mt-[30px] font-[500] text-[0.875rem] mb-[10px]">
          About
        </h1>
        <div className="h-96px ">
          {/* <Menubar placeholder="what not " /> */}
        </div>

        <div className=" border-b-[1px] border-lightgray">
          <button
            className="bg-[#eaeaea]  text-[0.875rem] hover:cursor-not-allowed text-[#9999] w-[81px] h-[35px] rounded-md my-[23px]"
            disabled
          >
            Update
          </button>
        </div>

        <div>
          <h1 className=" text-[0.875rem] font-semibold pt-[28px]">
            Danger Zone
          </h1>

          <button className="py-[6px] text-[0.875rem] px-[8px] mt-[15px] rounded-md flex border-[1px] border-lightgray border-md">
            <AiOutlineDelete className="my-auto mr-2" />
            <span>Delete Account</span>
          </button>
        </div>
      </div>
    </main>
  );
}
