import React from "react";
import { Menu } from "semantic-ui-react";

const Gnb = () => {
  const activeItem = "home";

  return (
    <Menu inverted>
      <Menu.Item
        name="home" //
        active={activeItem === "home"}
      />
      <Menu.Item
        name="messages" //
        active={activeItem === "messages"}
      />
      <Menu.Item
        name="friends" //
        active={activeItem === "friends"}
      />
    </Menu>
  );
};

export default Gnb;
