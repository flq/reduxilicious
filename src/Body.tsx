import React from "react";
import { Route } from "react-router-dom";
import { Profile, Login } from "./profile";
import { Admin } from "./admin";
import { Segment } from "semantic-ui-react";

export function Body() {
  return (
    <Segment basic>
      <Route exact path="/" component={() => <div>Home</div>} />
      <Route path="/cart" component={() => <div>Cart</div>} />
      <Route path="/profile" component={Profile} />
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
    </Segment>
  );
}
