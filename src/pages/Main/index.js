import React, { Component } from "react";
import { FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import Container from "../../components/Container";
import { Menu, Button, MainContent } from "./styles";

export default class Main extends Component {
  render() {
    return (
      <Container>
        <MainContent>
          <FaShieldAlt fontSize={300} color="black" />
          <Menu>
            <Link to={"caesar"}>
              <Button>
                <span>Cifra de César</span>
              </Button>
            </Link>
            <Link to={"vigenere"}>
              <Button>
                <span>Cifra de Vigenere</span>
              </Button>
            </Link>
            <Link to={"transposition"}>
              <Button>
                <span>Cifra de Transposição</span>
              </Button>
            </Link>
            <Link to={"rsa"}>
              <Button>
                <span>RSA</span>
              </Button>
            </Link>
          </Menu>
        </MainContent>
      </Container>
    );
  }
}
