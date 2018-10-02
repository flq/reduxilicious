import React from "react";
import { Grid, Form, Button, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import { Actions, isLoginFailed } from "./store";
import { ApplicationState } from "../rootStore";

type LoginProps = {} & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

export interface LoginState {
  userName: string;
}

class Login extends React.Component<LoginProps, LoginState> {
  state = { userName: "" };
  render() {
    const { logIn, loginFailed } = this.props;
    const { userName } = this.state;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Form error={loginFailed}>
              <Form.Input
                autofocus
                type="text"
                label="Enter your username"
                onChange={this.changeUsername}
                value={userName}
              />
              <Button primary onClick={() => logIn({ userName })}>
                Log in
              </Button>
              <Message error header="Login unsuccessful" content="Your login was not recognized." />
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  changeUsername = (e: React.FormEvent<HTMLInputElement>) =>
    this.setState({ userName: e.currentTarget.value });
}

const mapStateToProps = (s: ApplicationState) => ({
  loginFailed: isLoginFailed(s)
});

const mapDispatchToProps = {
  logIn: Actions.LogIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
