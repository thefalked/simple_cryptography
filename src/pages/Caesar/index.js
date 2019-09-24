import React, { Component } from "react";

import Container from "../../components/Container";
import BackButton from "../../components/BackButton";

import { TextArea, Submit, Switch, Output, Flex, Chave } from "./styles";

export default class Ceasar extends Component {
  state = {
    cript: true,
    key: 1,
    textInput: "",
    textOutput: ""
  };

  handleChangeTextInput = event => {
    this.setState({ textInput: event.target.value });
  };

  handleChangeCheckBox = () => {
    const { cript } = this.state;
    this.setState({ cript: !cript });
  };

  handleChangeKey = event => {
    this.setState({ key: parseInt(event.target.value) });
  };

  encript = (alfabeto, input, chave) => {
    return input
      .split("")
      .map(letra =>
        letra !== " " && isNaN(letra)
          ? alfabeto[(alfabeto.indexOf(letra) + chave) % 26]
          : letra
      )
      .join("");
  };

  decrypt = (alfabeto, input, chave) => {
    return input
      .split("")
      .map(letra =>
        letra !== " " && isNaN(letra)
          ? alfabeto[(((alfabeto.indexOf(letra) - chave) % 26) + 26) % 26]
          : letra
      )
      .join("");
  };

  handleSubmit = async () => {
    const { cript, textInput, key } = this.state;

    const alfabeto = "abcdefghijklmnopqrstuvwxyz";

    if (cript)
      this.setState({
        textOutput: await this.encript(alfabeto, textInput.toLowerCase(), key)
      });
    else
      this.setState({
        textOutput: await this.decrypt(alfabeto, textInput.toLowerCase(), key)
      });
  };

  render() {
    const { cript, textInput, textOutput, key } = this.state;
    return (
      <Container>
        <Flex>
          <h1>Cifra de Cezar</h1>
          <TextArea value={textInput} onChange={this.handleChangeTextInput} />
          <Switch>
            <label className="switchContainer">
              Encriptografar
              <input
                type="checkbox"
                checked={cript}
                onChange={this.handleChangeCheckBox}
              />
              <span className="checkmark" />
            </label>
          </Switch>
          <Chave>
            <input type="number" value={key} onChange={this.handleChangeKey} />
            <p>Valor da chave</p>
          </Chave>
          <Submit onClick={this.handleSubmit}>
            {cript ? "Criptografar" : "Descriptografar"}
          </Submit>
          <Output value={textOutput} />
        </Flex>
        <BackButton />
      </Container>
    );
  }
}
