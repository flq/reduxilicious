import React from "react";
import { Route } from "react-router-dom";
import { Profile } from "./profile";

export function Body() {
  return (
    <>
      <Route exact path="/" component={() => <div>Home</div>} />
      <Route path="/cart" component={() => <div>Cart</div>} />
      <Route path="/profile" component={Profile} />
    </>
  );
}
