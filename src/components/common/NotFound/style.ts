import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  height: 100vh;
`;

export const NotFoundNumber = styled.div`
  font-size: 90px;
  font-weight: bold;

  user-select: none;

  color: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
`;
export const NotFoundText = styled.div`
  font-size: 18px;
  margin-bottom: 10px;

  user-select: none;
`;
export const HomeButton = styled.button`
  width: 35%;
  height: 50px;

  background-color: green;

  border: 0;
  border-radius: 10px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  cursor: pointer;
`;
