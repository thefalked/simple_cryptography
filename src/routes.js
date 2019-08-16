import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Ceasar from "./pages/Caesar";
import Vigenere from "./pages/Vigenere";
import Transposition from "./pages/Transposition";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/caesar" component={Ceasar} />
        <Route path="/vigenere" component={Vigenere} />
        <Route path="/transposition" component={Transposition} />
      </Switch>
    </BrowserRouter>
  );
}
