import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  height: calc(100vh - 1rem);
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #ffd700;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
`;

export const TextArea = styled.textarea.attrs(props => ({
  rows: 14
}))`
  width: 80%;
  font-size: 14px;
`;
export const Submit = styled.button`
  background: #ffd700;
  font-weight: bold;
  color: black;
  padding: 12px 20px;
  border: 0;
  margin: 1rem;
`;
export const Switch = styled.div`
  /* Customize the label (the switchContainer) */
  .switchContainer {
    display: block;
    position: relative;
    padding-left: 35px;
    margin: 12px 0;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: white;
  }

  /* Hide the browser's default checkbox */
  .switchContainer input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .switchContainer:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .switchContainer input:checked ~ .checkmark {
    background-color: #ffd700;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .switchContainer input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .switchContainer .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid black;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  p {
    color: white;
  }
`;
export const Output = styled.textarea.attrs(props => ({
  disabled: true,
  rows: 14
}))`
  width: 80%;
  font-size: 14px;
`;

export const Chave = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    font-size: 20px;
    width: 15%;
    margin-right: 1rem;
  }

  p {
    color: white;
    font-size: 20px;
  }
`;
