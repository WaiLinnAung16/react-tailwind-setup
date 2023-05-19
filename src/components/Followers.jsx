import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import React from "react";
import { Avatar, Flex, Group } from "@mantine/core";
const Followers = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
      mt={4}
      className="p-3 rounded-md transition-all duration-500 cursor-pointer hover:bg-slate-100 hover:shadow-md"
    >
      <Group>
        <Avatar
          src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          radius="xl"
          size="lg"
        />
        <Flex direction="column">
          <h1 className="text-lg">Anonymous 1</h1>
          <p className="text-sm text-slate-500">2 minutes ago</p>
        </Flex>
      </Group>
      <Flex align="center" gap={5}>
        <span className="text-sm">See Profile</span>
        <MdOutlineKeyboardDoubleArrowRight />
      </Flex>
    </Flex>
  );
};

export default Followers;
