import styled from "@emotion/styled"
import { colors } from "../styles/colors"
import { Link } from "react-router-dom";


const FootBarContainer = styled.div`
display: flex;
justify-content: center;
gap: 3.5rem;
margin-right: auto;
margin-left: auto;
width: 550px;
margin-top: 80px;
`


const NavegationButton = styled.button`
background-color: inherit;
border: none;
line-height: 2rem;
font-size: 1.2rem;
color: ${colors.white};
cursor:pointer;
`

const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
`

const StyledText = styled.p`
line-height: 2rem;
font-size: 1.2rem;
color: ${colors.white};
`





export default function FootBar() {

  return (
    <>
    <FootBarContainer>
      <StyledText>© 2024 Angelo Coronado</StyledText>
      <StyledText>•</StyledText>

      <StyledLink to="https://www.linkedin.com/in/angelo-coronado-m/" target="_blank">
        <NavegationButton>Linkedin</NavegationButton>     
      </StyledLink>

      <StyledLink to="https://github.com/Angelinis" target="_blank">
        <NavegationButton>Github</NavegationButton>     
      </StyledLink>
             

    </FootBarContainer>
    </>
  )
}

