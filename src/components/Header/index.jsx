import styled from "styled-components";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import shop from "../../assets/shop.png";
import search from "../../assets/search.png";

const StyledPage = styled.div`
    position: absolute;
    top: 0;
    z-index: 3;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 45vw;
    margin-top: 20px;
`
const StyledSubDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    font-size: 1.5em;
`
const StyledInput = styled.input`
    height: 30px;
    width: 100px;
    border-radius: 5px;
    padding-left: 40px;
    background-color: #3C3D41;
    border: none;
    outline: none;
    color: white;
`
const StyledImg = styled.img`
    position: absolute;
    top: 10px;
    left: 10px;
    width: 20px;
    height: 20px;
`
const StyledLogo = styled.img`
    width: 30px;
    height: 30px;
`
const StyledInputDiv = styled.div`
    position: relative;
`
function Home(){
    return (
        <StyledPage>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <StyledSubDiv>
                <p>Home</p>
                <p>Offers</p>
                <p>Collection</p>
                <p>Contact</p>
                <StyledInputDiv>
                    <StyledImg src={search} alt="search" />
                    <StyledInput type="text" placeholder="Search"/>
                </StyledInputDiv>
                <StyledLogo src={shop} alt="shop" />
                <StyledLogo src={menu} alt="menu" />
            </StyledSubDiv>
        </StyledPage>
    )
}

export default Home;