import styled from "styled-components";

export const BoxAlign = styled.div`
  display: flex;

  width: 48.75rem;
  height: 26rem;

  /* background: var(--cinzaFundo); */
  border-radius: 4px;

  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;
`;

export const AsideMenu = styled.aside`
  display: flex;

  background: var(--pretoAbsoluto);
  width: 48.438rem;
  height: 2.063rem;
  border: 1px solid var(--pretoAbsoluto);

  justify-content: space-between;

  margin-bottom: 1rem;

  @media (max-width: 320px) {
    display: flex;
    width: 18.388rem;
    height: 2rem;

    font-size: 16px;
    line-height: 18px;

    align-items: center;
  }
`;

export const BoxGray = styled.div`
  display: flex;

  width: 48.75rem;
  /* height: 26rem; */

  background: var(--cinzaFundo);
  border-radius: 4px;

  justify-content: center;

  /* margin: 10px; */

  @media (max-width: 320px) {
    width: 18.438rem;
  }
`;

export const ListStyled = styled.ul`
  display: flex;

  flex-direction: column;
  justify-content: space-evenly;

  width: 45.813rem;
  /* height: 23.063rem; */

  margin: 18px;

  @media (max-width: 320px) {
    width: 18.4rem;
  }
`;

export const TechStyled = styled.li`
  display: flex;

  width: 45.75rem;
  height: 4.063rem;

  background: var(--pretoAbsoluto);

  border-radius: 4px;

  justify-content: space-between;
  align-items: center;

  padding: 28px;

  font-weight: 700;
  font-size: 14.2123px;
  line-height: 24px;

  margin: 10px;

  @media (max-width: 320px) {
    width: 17.438rem;
    height: 3.046rem;
  }
`;

export const TechListDetails = styled.div`
  display: flex;

  width: 8rem;

  justify-content: space-between;
  align-items: center;

  font-weight: 400;
  font-size: 12.182px;
  line-height: 22px;

  color: var(--cinzaClaro);

  @media (max-width: 320px) {
    font-size: 14.2123px;
    line-height: 24px;

    width: 7rem;
  }
`;

export const NavBar = styled.div`
  display: flex;

  width: 100vw;
  height: 4.5rem;

  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid var(--cinzaMedio);

  @media (max-width: 320px) {
    width: 18.489rem;

    div {
      div {
        img {
          width: 6.099rem;
          height: 1.056rem;
        }
      }
    }
  }
`;

export const Welcome = styled.div`
  display: flex;

  width: 100vw;
  height: 7.375rem;

  justify-content: space-around;
  align-items: center;

  margin: 1rem;

  border-bottom: 1px solid var(--cinzaMedio);

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--cinzaClaro);
  }

  @media (max-width: 320px) {
    height: 8.188rem;

    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    margin-left: 2.5rem;
  }
`;

export const ButtonPlus = styled.button`
  display: flex;

  width: 2.031rem;
  height: 2rem;

  justify-content: center;
  align-items: center;

  color: var(--cinzaFonte);
  font-weight: 700;

  background: var(--cinzaMedio);

  @media (max-width: 320px) {
    height: 2rem;
    width: 2.031rem;
  }
`;
