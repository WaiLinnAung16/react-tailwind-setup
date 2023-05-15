import { Menu } from "@mantine/core";
import React from "react";
import { BiChevronDown } from "react-icons/bi";

const Profile = () => {
  return (
    <div className="cursor-pointer">
      <Menu withArrow>
        <Menu.Target className="hover:bg-slate-100">
          <div className="flex items-center gap-3 p-2">
            {/* img */}
            <div className=" p-5 bg-slate-800 rounded-full"></div>
            <div>
              <h1 className="font-bold">Wai Linn Aung</h1>
              <p className="text-sm text-slate-500">Frontend Developer</p>
            </div>
            <BiChevronDown className="text-xl" />
          </div>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item w={"10rem"}>
            <h1>Setting</h1>
          </Menu.Item>
          <Menu.Item>
            <h1>Logout</h1>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default Profile;
