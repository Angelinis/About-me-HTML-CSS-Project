import styled from "@emotion/styled"
import { colors } from "../styles"
import { Link } from "react-router-dom"

const StyledShortContainer = styled.div`
width: 500px;
height: 600px;
background: ${colors.personalized1};
border-radius: 60px;
`

const StyledLargeContainer = styled.div`
width: 1000px;
height: 600px;
background: ${colors.personalized5};
border-radius: 60px;
`

const StyledMainContainer= styled.div`
margin-left: 30px;
margin-right: 30px;
margin-bottom: 80px;
margin-top: 80px;
display: flex;
max-width: auto;
gap: 80px;
justify-content: space-between;
`

const StyledHeaderContainer = styled.div`
background: ${colors.white};
height: 60px;
padding-top: 100px;
border-top-left-radius: 60px;
border-top-right-radius: 60px;
`

const StyledHeader = styled.h1`
line-height: 3rem;
font-size: 3rem;
color: ${colors.black};
text-align: right;
padding-right: 60px;
padding-bottom: 20px;
margin-left: auto;
background: ${colors.white};
`

const StyledImageShort = styled.img`
width: 70%;
max-height: 50%;
margin-top: 120px;
margin-right: auto;
margin-left:auto;
`

const StyledImageLarge = styled.img`
width: 20%;
max-height: 50%;
margin-top: 120px;
margin-right: auto;
margin-left:auto;
`



const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
`


export function WorkSpaceContainer({children}){
  return(
    <>
      <StyledMainContainer>
        {children}
      </StyledMainContainer>
    </>
  )

}


export function WorkSpaceShort({children, sourceImage, link}){
  return(
    <>
    <StyledLink to={link} target="_blank">      
    <StyledShortContainer>
        <StyledHeaderContainer>
        <StyledHeader>{children}</StyledHeader>
        </StyledHeaderContainer>

        <StyledImageShort src={sourceImage}></StyledImageShort>
      </StyledShortContainer>
    </StyledLink>

    </>
  )

}

export function WorkSpaceLarge({children, sourceImage, link}){
  return(
    <>
    <StyledLink to={link} target="_blank"> 
      <StyledLargeContainer>
        <StyledHeaderContainer>
        <StyledHeader>{children}</StyledHeader>
        </StyledHeaderContainer>

        <StyledImageLarge src={sourceImage}></StyledImageLarge>
      </StyledLargeContainer>
    </StyledLink>
    </>
  )

}