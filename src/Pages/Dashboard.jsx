import React, { useState } from "react";
import Card from "../components/Card";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdChevronRight } from "react-icons/md";
import { Chart } from "../components/Chart";

import Followers from "../components/Followers";
import { Group } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
const Dashboard = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <h1 className="text-3xl font-extrabold mb-3 text-slate-800 ">
        Dashboard
      </h1>
      <div className="grid grid-cols-12 gap-5">
        <Card icon={<FaFacebookF />} num="280k" />
        <Card icon={<FaTwitter />} num="234k" />
        <Card icon={<AiFillInstagram />} num="156k" />
        <Card icon={<FaYoutube />} num="270k" />
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-9 p-5 rounded-md bg-white shadow-md">
          <Chart />
        </div>
        <div className="col-span-3">
          <div className="grid grid-row-2 gap-5">
            <Group
              position="center"
              className="bg-white p-5 rounded-md shadow-md"
            >
              <DatePicker value={value} onChange={setValue} size="md" />
            </Group>
            <div className=" h-[450px] p-5 bg-white rounded-md shadow-md">
              <div className="flex justify-between items-center mb-7">
                <h1 className="text-lg">Recent Followers</h1>
                <p className="flex items-center gap-1 cursor-pointer">
                  View All <MdChevronRight className="text-xl" />
                </p>
              </div>
              <Followers />
              <Followers />
              <Followers />
              <Followers />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
