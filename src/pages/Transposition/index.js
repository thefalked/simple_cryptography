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

  keyToEncript = chave => {
    return chave
      .toLowerCase()
      .split("")
      .map((letra, indice) => {
        return { letra, pos: indice };
      })
      .sort((a, b) => a.letra.localeCompare(b.letra));
  };

  keyToDecript = chave => {
    return chave
      .toLowerCase()
      .split("")
      .map((letra, indice) => {
        return { letra, pos: indice };
      })
      .sort((a, b) => a.letra.localeCompare(b.letra))
      .map((obj, indice) => {
        return { ...obj, posOrdenada: indice };
      })
      .sort((a, b) => a.pos - b.pos);
  };

  inputToSizeKey = (input, chave) => {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";

    while (!Number.isInteger(input.length / chave.length)) {
      input += alfabeto[Math.floor(Math.random() * 25 + 0)];
    }
    return input;
  };

  encript = (input, chave) => {
    return chave
      .map(obj => {
        let texto = "",
          index = 0;

        while (obj.pos + chave.length * index <= input.length - 1) {
          texto += input[obj.pos + chave.length * index];
          index++;
        }

        return texto;
      })
      .join("");
  };

  returnText = (input, chave, index, texto) => {
    return chave
      .map(obj => (texto = input[obj.posOrdenada * chave.length + index]))
      .join("");
  };

  decrypt = (input, chave) => {
    let texto = "";
    for (let index = 0; index < input.length / chave.length; index++) {
      texto += this.returnText(input, chave, index, texto);
    }
    return texto;
  };

  handleSubmit = async () => {
    const { cript, textInput, key } = this.state;

    const input = this.inputToSizeKey(
      textInput
        .toLowerCase()
        .split(" ")
        .join(""),
      key
    );

    if (cript)
      this.setState({
        textOutput: await this.encript(input, this.keyToEncript(key))
      });
    else
      this.setState({
        textOutput: await this.decrypt(input, this.keyToDecript(key))
      });
  };

  render() {
    const { cript, textInput, textOutput, key } = this.state;
    return (
      <Container>
        <Flex>
          <h1>Cifra de Transposição</h1>
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
