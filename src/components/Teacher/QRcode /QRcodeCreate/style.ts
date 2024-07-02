import styled from "styled-components";

export const QrContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
`;

export const BackContainer = styled.div`
  display: flex;

  width: 100%;
`;

export const BackButtonContainer = styled.div`
  display: flex;

  padding: 30px 0px 50px 15%;

  gap: 10px;
`;

export const Text = styled.div`
  font-size: 20px;
`;

export const QrButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;

  gap: 10px;
`;

export const Button = styled.button`
  width: 32%;
  height: 5%;

  border-radius: 10px;
  border: 0;

  font-size: 20px;

  margin-top: -50px;
`;
