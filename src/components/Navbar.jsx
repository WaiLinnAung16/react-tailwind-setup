import { ActionIcon, Flex, TextInput } from "@mantine/core";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SlWallet } from "react-icons/sl";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <div className="grid grid-cols-12 items-center py-3 px-10 bg-[#fff] sticky top-0 shadow-md z-50">
      <div className="col-span-2">
        <Flex align="center" gap="sm">
          <SlWallet className="text-xl" />
          <h1 className="font-bold tracking-wide text-2xl">PayPen</h1>
        </Flex>
      </div>
      <div className="col-span-10 flex justify-between items-center gap-5">
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
        <div className="flex items-center gap-5">
          <IoMdNotificationsOutline className="text-3xl" />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
