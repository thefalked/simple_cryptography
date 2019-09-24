import React from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

import ButtonBack from "./styles";

export default function BackButton() {
  return (
    <ButtonBack>
      <button>
        <FaRegArrowAltCircleLeft size={20} color="white" />
      </button>
    </ButtonBack>
  );
}
