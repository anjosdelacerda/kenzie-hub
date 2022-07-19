import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
padding: 0;
box-sizing: border-box;
outline: 0;
}

:root{
    --rosa: #FF577F;
    --pretoAbsoluto: #121214;
    --cinzaFundo: #212529;
    --cinzaMedio: #343B41;
    --cinzaClaro: #868E96;
    --cereja: #E83F5B;
    --limao: #3FE864;
    --cinzaFonte: #F8F9FA;

}

body{
    background: var(--pretoAbsoluto);
    color: var(--cinzaFonte);
    font-family: "Inter", serif;
    font-size: 1rem;

}

h1{
    font-weight: bold;
    color: var(--rosa)
}



`;
