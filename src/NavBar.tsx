import React from "react";
import { Menu, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <Menu>
      <Menu.Item>
        <Header>
          <Link to="/">
            <Icon name="algolia" />
            Reduxilicious
          </Link>
        </Header>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Link to="/cart">My Cart</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/profile">My Profile</Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
