import React, { Component } from "react";

import Container from "../../components/Container";

import { TextArea, Submit, Switch, Output, Flex, Chave } from "./styles";

export default class Ceasar extends Component {
  state = {
    cript: true,
    key: "",
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
    this.setState({ key: event.target.value });
  };

  encript = (alfabeto, input, chave) => {
    return input
      .split("")
      .map((letra, indice) =>
        letra !== " " && isNaN(letra)
          ? alfabeto[
              (alfabeto.indexOf(letra) +
                alfabeto.indexOf(
                  chave.split("")[indice % chave.split("").length]
                )) %
                26
            ]
          : letra
      )
      .join("");
  };

  decrypt = (alfabeto, input, chave) => {
    return input
      .split("")
      .map((letra, indice) =>
        letra !== " " && isNaN(letra)
          ? alfabeto[
              (((alfabeto.indexOf(letra) -
                alfabeto.indexOf(
                  chave.split("")[indice % chave.split("").length]
                )) %
                26) +
                26) %
                26
            ]
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
          <h1>Cifra de Vigenere</h1>
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
            <p>Valor da chave</p>
            <input type="text" value={key} onChange={this.handleChangeKey} />
          </Chave>
          <Submit onClick={this.handleSubmit}>
            {cript ? "Criptografar" : "Descriptografar"}
          </Submit>
          <Output value={textOutput} />
        </Flex>
      </Container>
    );
  }
}
