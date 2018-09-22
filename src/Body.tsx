import React from "react";
import { Route } from "react-router-dom";

export function Body() {
  return (
    <>
      <Route exact path="/" component={() => <div>Home</div>} />
      <Route path="/cart" component={() => <div>Cart</div>} />
      <Route path="/profile" component={() => <div>Profile</div>} />
    </>
  );
}
