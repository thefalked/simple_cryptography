import React, { Component } from "react";
import { Link } from "react-router-dom";

import Container from "../../components/Container";
import { Menu, Button } from "./styles";

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Menu>
          <Link to={"caesar"}>
            <Button>
              <span>Cifra de César</span>
            </Button>
          </Link>
        </Menu>
      </Container>
    );
  }
}
