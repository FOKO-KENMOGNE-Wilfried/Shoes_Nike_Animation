import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: linear-gradient(
            to right,
            #3C3D41,
            #1D1E25,
            #181820
        );
        color: white;
        font-family: kanit;
    }
`
function GlobalStyle(){
    return <StyledGlobalStyle />
}

export default GlobalStyle;