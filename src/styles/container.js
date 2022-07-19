import styled from "styled-components";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  height: 100vh;
  flex-direction: column;
`;

export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* height: 100vh; */
  flex-direction: column;

  padding: 20px;
`;

export const ContainerMaior = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* height: 100vh; */
  flex-direction: column;
  padding: 100px;
`;

export const ToastColor = styled(ToastContainer)`
  background: var(--cinzaFundo);
`;
