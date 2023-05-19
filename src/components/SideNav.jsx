import { useState } from "react";

import { Box, NavLink as MantineLink } from "@mantine/core";
import { BiBookAlt, BiHome } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { BsPeople } from "react-icons/bs";

const data = [
  {
    icon: BiHome,
    label: "dashboard",
    link: "",
  },
  {
    icon: BiBookAlt,
    label: "blog",
    link: "blog",
  },
  { icon: BsPeople, label: "team", link: "team" },
];

export const SideNav = () => {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <MantineLink
      component={NavLink}
      to={`/${item.link}`}
      key={item.label}
      active={index === active}
      label={item.label}
      rightSection={item.rightSection}
      icon={<item.icon size="1.5rem" stroke={1.5} />}
      onClick={() => setActive(index)}
      color="dark"
      variant="filled"
      styles={{
        label: { textTransform: "capitalize", fontSize: "1.1rem" },
        root: {
          borderRadius: "6px",
          ":hover": { backgroundColor: "#eee" },
        },
      }}
    />
  ));

  return (
    <Box w={300} mx={"lg"}>
      <h1 className="text-base font-bold tracking-wide text-[#a2a2a2] mb-3">
        Main Menu
      </h1>
      {items}
    </Box>
  );
};
