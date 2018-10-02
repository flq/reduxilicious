import React from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../rootStore";
import { getUser, Actions } from "./store";
import { Button } from "semantic-ui-react";
import { Dispatch } from "redux";
import { push } from "connected-react-router";

export type ProfileProps = {} & ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

class Profile extends React.Component<ProfileProps> {
  render() {
    const { user, logOut } = this.props;
    return (
      <>
        <p>Hello {user.name}</p>
        <Button negative onClick={logOut}>
          Log Out
        </Button>
      </>
    );
  }
}

const mapStateToProps = (s: ApplicationState) => ({
  user: getUser(s)
});

const mapDispatchToProps = (d: Dispatch) => ({
  logOut: () => {
    d(Actions.LogOut());
    d(push("/"));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
