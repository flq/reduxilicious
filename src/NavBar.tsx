import React from "react";
import { Menu, Header, Icon, Loader } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ApplicationState } from "./rootStore";
import { isLoggedIn } from "./profile";
import { isAnyPending } from "./api";

export type NavBarProps = {} & ReturnType<typeof mapStateToProps>;

export function NavBar({ loggedIn, pending }: NavBarProps) {
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
        {pending && (
          <Menu.Item>
            <Loader inline active size="tiny" />
          </Menu.Item>
        )}
        <Menu.Item>
          <Link to="/cart">My Cart</Link>
        </Menu.Item>
        <Menu.Item>{getLink(loggedIn)}</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

function getLink(loggedIn: boolean) {
  const [to, text] = loggedIn ? ["/profile", "My Profile"] : ["/login", "Log in"];
  return <Link to={to}>{text}</Link>;
}

const mapStateToProps = (s: ApplicationState) => ({
  loggedIn: isLoggedIn(s),
  pending: isAnyPending(s)
});
export default connect(mapStateToProps)(NavBar);
