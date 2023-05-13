import { ActionIcon, Avatar, Menu, TextInput } from "@mantine/core";

import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiBookContent } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  return (
    <div className="grid grid-cols-12 items-center py-3 px-5 bg-[#fff] sticky top-0 shadow-md z-50">
      <div className="col-span-2 flex items-center gap-1 text-2xl">
        <BiBookContent />
        <h1 className="font-bold tracking-wide">BLOGMAKER</h1>
      </div>
      <div className="col-span-10 ml-auto flex items-center gap-5">
        <TextInput
          size="md"
          className="w-[400px]"
          rightSection={
            <ActionIcon size={32} variant="filled" className="bg-slate-900">
              <BsSearch size="1.1rem" stroke={1.5} />
            </ActionIcon>
          }
          placeholder="Search questions"
          rightSectionWidth={42}
        />

        <IoMdNotificationsOutline className="text-3xl" />
        <TbMessageCircle className="text-3xl" />
        <CgProfile className="text-3xl" />
      </div>
    </div>
  );
};

export default Navbar;
