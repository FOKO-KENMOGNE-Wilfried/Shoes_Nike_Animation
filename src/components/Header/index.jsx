import styled from "styled-components";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import shop from "../../assets/shop.png";

const StyledPage = styled.div`
    position: absolute;
    top: 0;
    z-index: 3;
    display: flex;
    flex-direction: row;
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
    border-radius: 5px;
    padding-left: 10px;
    background-color: #3C3D41;
    border: none;
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
                <StyledInput type="text" placeholder="Search"/>
                <img src={shop} alt="shop" />
                <img src={menu} alt="menu" />
            </StyledSubDiv>
        </StyledPage>
    )
}

export default Home;