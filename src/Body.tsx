import React from "react";
import { Route } from "react-router-dom";
import { Profile, Login } from "./profile";
import { Admin } from "./admin";
import { Segment } from "semantic-ui-react";
import { Products } from "./products/Products";

export function Body() {
  return (
    <Segment basic>
      <Route exact path="/" component={() => <Products />} />
      <Route path="/cart" component={() => <div>Cart</div>} />
      <Route path="/profile" component={Profile} />
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
    </Segment>
  );
}
