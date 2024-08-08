import styled from "@emotion/styled"
import { colors } from "../styles/colors"
import { Link } from "react-router-dom";
import designerIcon from "../assets/designer.png";
// import cv from "/files/CV.pdf";


const FootBarContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-areas: "content2 content1";
justify-content: center;
align-items: center;
margin-right: auto;
margin-left: auto;
width: 30%;
margin-top: 80px;
margin-bottom: 40px;
gap: 30px;

@media only screen and (max-width: 550px) {
  grid-template-columns: 1fr;
  grid-template-areas:
  "content1"
  "content2"
  ;
}
`


const NavegationButton = styled.button`
background-color: inherit;
border: none;
line-height: 120%;
font-size: 120%;
color: ${colors.white};
cursor:pointer;
`

const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
display: flex;
`

const StyledText = styled.p`
line-height: 2rem;
font-size: 1.2rem;
color: ${colors.white};
`

const StyledIcon = styled.img`
height: 25px;
width: 25px;
filter: grayscale(50%);
margin-left: 25px;
`

const StyledContainer = styled.div`
display: flex;
align-items: center;
margin-right: auto;
margin-left: auto;
gap: 20px;
grid-area: content1;
`

const StyledContainer2 = styled.div`
display: flex;
align-items: center;
width: 250px;
margin-right: auto;
margin-left: auto;
grid-area: content2;
`


export default function FootBar() {

  return (
    <>
    <FootBarContainer>
      <StyledContainer2 >
      <StyledText>© 2024 Angelo Coronado</StyledText>
      <StyledIcon src={designerIcon}/>
      </StyledContainer2>

      <StyledContainer >
      <StyledLink to="https://www.linkedin.com/in/angelo-coronado-m/" target="_blank">
        <NavegationButton>Linkedin</NavegationButton>     
      </StyledLink>

      <StyledLink to="https://github.com/Angelinis" target="_blank">
        <NavegationButton>Github</NavegationButton>     
      </StyledLink>
             
 
      </StyledContainer >
    </FootBarContainer>
    </>
  )
}

