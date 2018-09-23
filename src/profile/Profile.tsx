import React from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../rootStore";

export type ProfileProps = {} & ReturnType<typeof mapStateToProps>;

class Profile extends React.Component<ProfileProps> {
  render() {
      const { user } = this.props;

      return user ? <p>You are logged in</p> : <p>You are not logged in</p>
  }
}

const mapStateToProps = (s: ApplicationState) => ({
    user: s.user
});

export default connect(mapStateToProps)(Profile);