import React from "react";
import { Menu, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ApplicationState } from "./rootStore";

export type NavBarProps = {} & ReturnType<typeof mapStateToProps>;

export function NavBar({ isLoggedIn }: NavBarProps) {
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
          <Link to="/profile">{isLoggedIn ? "My Profile" : "Log in"}</Link> :
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

const mapStateToProps = (s: ApplicationState) => ({ isLoggedIn: s.user != null });
export default connect(mapStateToProps)(NavBar);
