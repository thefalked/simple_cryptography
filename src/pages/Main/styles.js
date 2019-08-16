import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  height: calc(100vh - 1rem);
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.button`
  padding: 2rem;
  color: black;
  background: #ffd700;
  border: 0;
  border-radius: 0.25rem;

  span {
    font-weight: bold;
    font-size: 1.2rem;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const CardMenuImage = styled.div``;
