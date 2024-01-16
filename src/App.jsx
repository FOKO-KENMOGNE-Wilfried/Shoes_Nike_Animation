import styled from "styled-components";
import image from "./assets/nike.png";
import Home from "./components/Header";

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
const StyledImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80vw;
  height: 90vh;
  z-index: 2;
`
const StyledSubDiv = styled.div`
  position: relative;
  font-size: 30em;
  font-weight: 700;
  position: relative;
  color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`

function App() {

  return (
    <StyledPage>
      <Home />
      <StyledImg src={image} alt="nike" />
      <StyledSubDiv>
        NIKE
      </StyledSubDiv>

    </StyledPage>
  )
}

export default App;
