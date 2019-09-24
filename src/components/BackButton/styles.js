import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonBack = styled(Link).attrs({
  to: "/"
})`
  position: absolute;
  top: 5%;
  left: 5%;

  button {
    background: transparent;
    border: 0;

    svg {
      stroke-width: 5;
      width: 3rem;
      height: 3rem;
    }
  }
`;

export default ButtonBack;
