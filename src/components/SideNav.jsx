import { useState } from "react";
import { Box, NavLink } from "@mantine/core";
import { BiHome, BiBookAlt } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
const data = [
  { icon: BiHome, label: "Dashboard" },
  {
    icon: BiBookAlt,
    label: "Blog",
  },
  { icon: BsPeople, label: "Team" },
];

const SideNav = () => {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      icon={<item.icon size="1.3rem" stroke={1.5} />}
      onClick={() => setActive(index)}
      color="dark"
      variant="filled"
      styles={{
        label: { fontSize: "1.12rem" },
        root: {
          borderRadius: "6px",
          paddingInlineStart: "1rem",
          ":hover": { backgroundColor: "#eeeeee" },
        },
      }}
    />
  ));

  return <div className="w-[390px] fixed mx-5 my-5">{items}</div>;
};
export default SideNav;
