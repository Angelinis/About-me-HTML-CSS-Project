import styled from "@emotion/styled"
import { colors } from "../styles"
import { Link } from "react-router-dom"


const StyledContainer = styled.div`
width: 40%;
height: 100px;
background: ${colors.stone[300]};
border-radius: 20px;
margin-right: auto;
margin-left: auto;
margin-bottom: 40px;
display:flex;
align-items: center;
justify-content: space-between;

@media only screen and (max-width: 550px) {
  width: 80%;
}
`

const StyledHeader = styled.h2`
line-height: 1.8vw;
font-size: 1.8vw;
color: ${colors.black};
text-align: left;
margin-left: 20px;

@media only screen and (max-width: 550px) {
  line-height: 5vw;
  font-size: 5vw;
}

`

const StyledIcon = styled.img`
height: 40px;
margin-left: auto;
margin-right: 20px;
filter: grayscale(50%);
`

const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
`

export function ContactBar({sourceImage, children, link}){
  return(
    <>
    <StyledLink to={link} target="_blank"> 
      <StyledContainer>
        <StyledHeader>{children}</StyledHeader>
        <StyledIcon src={sourceImage}></StyledIcon>
      </StyledContainer>
    </StyledLink>
    </>
  )
}


