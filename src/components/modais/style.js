import styled from "styled-components";

export const Glass = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  position: fixed;

  justify-content: center;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.2);

  z-index: 10;
`;

export const StyledModal = styled.form`
  display: flex;

  width: 23.063rem;
  height: 22.365rem;

  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  background: var(--cinzaFundo);

  @media (max-width: 320px) {
    width: 18.5rem;
    height: 17.146rem;
  }
`;

export const StyledModalTop = styled.div`
  display: flex;

  width: 23.063rem;
  height: 3.125rem;

  padding: 12px 20px;

  border-radius: 4px 4px 0px 0px;

  align-items: center;
  justify-content: space-between;

  background: var(--cinzaMedio);

  button {
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;

    color: var(--cinzaClaro);
    background: var(--cinzaMedio);

    width: 1.5rem;
    height: 1.5rem;

    align-items: center;
    justify-content: center;

    cursor: pointer;
  }

  @media (max-width: 320px) {
    width: 18.5rem;
    height: 2.507rem;

    button {
      display: flex;
      width: 1rem;
      height: 1rem;

      font-size: 9.63px;
    }
  }
`;

export const SetPadding = styled.div`
  display: flex;
  padding: 20px;

  height: 100%;
  width: 100%;

  flex-direction: column;
  justify-content: space-between;
`;

export const DivButtons = styled.div`
  display: flex;

  width: 20.25rem;
  height: 3rem;

  justify-content: space-between;

  @media (max-width: 320px) {
    width: 16.097rem;
    height: 2.398rem;
  }
`;
