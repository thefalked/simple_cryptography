import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

export const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const Button = styled.button`
  padding: 2rem;
  color: black;
  background: #ffd700;
  border: 0;
  border-radius: 0.25rem;
  margin-top: 2rem;

  span {
    font-weight: bold;
    font-size: 1.2rem;
  }

  &:hover {
    opacity: 0.7;
  }
`;
