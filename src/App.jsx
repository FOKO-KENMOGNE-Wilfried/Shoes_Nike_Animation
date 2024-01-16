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
const StyledInfo = styled.div`
  position: absolute;
  left: 0;
`
const StyledColorDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`
const StyledColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 30px;
`
const StyledNumberDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`
const StyledNumber = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 30px;
  border: 1px solid black;
  text-align: center;
`
function App() {

  return (
    <StyledPage>
      <Home />
      <StyledImg src={image} alt="nike" />
      <StyledSubDiv>
        NIKE
      </StyledSubDiv>
      <StyledInfo>
        <p>NIKE Impact4</p>
        <p>$250.90</p>
        <div>
          <p>Colors</p>
          <StyledColorDiv>
            <StyledColor style={{backgroundColor: "white"}}></StyledColor>
            <StyledColor style={{backgroundColor: "red"}}></StyledColor>
            <StyledColor style={{backgroundColor: "green"}}></StyledColor>
            <StyledColor style={{backgroundColor: "black"}}></StyledColor>
          </StyledColorDiv>
        </div>
        
        <div>
          <p>Size</p>
          <StyledNumberDiv>
            <StyledNumber>6</StyledNumber>
            <StyledNumber>7</StyledNumber>
            <StyledNumber>8</StyledNumber>
            <StyledNumber>9</StyledNumber>
          </StyledNumberDiv>
        </div>
      </StyledInfo>

    </StyledPage>
  )
}

export default App;
