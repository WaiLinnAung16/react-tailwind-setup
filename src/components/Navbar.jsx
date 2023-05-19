import { ActionIcon, Flex, TextInput } from "@mantine/core";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbPencilMinus } from "react-icons/tb";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <div className="flex items-center py-3 px-5 bg-[#fff] sticky top-0 shadow-md z-50">
      <div className="mr-[150px]">
        <Flex align="center" gap="sm">
          <TbPencilMinus className="text-2xl" />
          <h1 className="font-bold tracking-wide text-2xl">BlogMaker</h1>
        </Flex>
      </div>
      <div className="flex justify-between items-center w-full">
        <TextInput
          size="md"
          className="w-[400px] mr-auto"
          rightSection={
            <ActionIcon size={32} variant="filled" className="bg-slate-900">
              <BsSearch size="1.1rem" stroke={1.5} />
            </ActionIcon>
          }
          placeholder="Search questions"
          rightSectionWidth={42}
        />
        <div className="flex items-center gap-5">
          <IoMdNotificationsOutline className="text-3xl" />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
