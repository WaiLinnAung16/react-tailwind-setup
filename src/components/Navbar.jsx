import { ActionIcon, Avatar, Menu, TextInput } from "@mantine/core";

import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <h1 className="font-bold text-3xl tracking-wide">BlogMaker</h1>
      <TextInput
        size="md"
        rightSection={
          <ActionIcon size={32} variant="filled" className="bg-slate-900">
            <BsSearch size="1.1rem" stroke={1.5} />
          </ActionIcon>
        }
        placeholder="Search questions"
        rightSectionWidth={42}
      />

      <div className="flex gap-5 items-center">
        <div>
          <IoMdNotificationsOutline className="text-3xl" />
        </div>
        <Menu
          width={200}
          withArrow
          className="hover:bg-slate-100 p-2 cursor-pointer"
        >
          <Menu.Target>
            <div className="flex gap-3 items-center">
              <Avatar
                radius="xl"
                src={
                  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                }
              />
              <div className="flex flex-col">
                <p className="font-semibold">Wai Linn Aung</p>
                <p className="text-sm text-slate-500">Frontend developer</p>
              </div>
              <BiChevronRight className="text-2xl" />
            </div>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item component="a" href="#">
              Mantine website
            </Menu.Item>

            <Menu.Item component="a" href="#" target="_blank">
              External link
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
