import styled from "styled-components";

export const LoginStyle = styled.form`
  display: flex;

  flex-direction: column;

  align-items: center;

  padding: 2.625rem 1.375rem;
  gap: 1.375rem;

  max-width: 23.063rem;
  max-height: 31.375rem;

  background: var(--cinzaFundo);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  color: var(--cinzaFonte);

  font-family: "Inter", serif;

  h2 {
    font-weight: 700;
    font-size: 18px;
    color: var(--cinzaFonte);
  }

  span {
    font-size: 10px;
    line-height: 26px;
  }

  @media (max-width: 320px) {
    width: 18.5rem;
    height: 25.168rem;

    h2 {
      font-weight: 700;
      font-size: 14.439px;
      line-height: 22px;
    }
  }
`;

export const AlignInput = styled.div`
  display: flex;

  width: 20.313rem;
  height: 4.375rem;

  flex-direction: column;
  justify-content: space-around;

  label {
    font-size: 12px;
    font-weight: 400;

    width: 15px;
  }

  input {
    display: flex;

    width: 20.621rem;
    height: 3rem;

    background: var(--cinzaMedio);
    border: 1px solid var(--cinzaFonte);
    border-radius: 4px;

    padding: 5px 5px;

    color: var(--cinzaFonte);
  }

  @media (max-width: 320px) {
    width: 16.5rem;
    height: 5.293rem;

    label {
      font-size: 9.772px;
    }

    input {
      width: 16.41rem;
      height: 2.406rem;
    }
  }
`;

export const KenzieHub = styled.div`
  h1 {
    color: var(--rosa);
  }
`;
