import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Ceasar from "./pages/Caesar";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/caesar" component={Ceasar} />
      </Switch>
    </BrowserRouter>
  );
}
