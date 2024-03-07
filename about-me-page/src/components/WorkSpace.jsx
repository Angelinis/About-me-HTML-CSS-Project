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
margin-left: auto;
margin-right: auto;
margin-bottom: 80px;
margin-top: 80px;
display: flex;
max-width: auto;
justify-content: space-around;
`

const StyledHeaderContainer = styled.div`
background: ${colors.white};
padding-top: 100px;
display: flex;
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
background: ${colors.white};
`

const StyledIconLanguage = styled.img`
background: ${colors.white};
height: 55px;
margin-left: auto;
margin-right: 20px;
filter: grayscale(50%);
`


const StyledImageShort = styled.img`
width: 70%;
max-height: 50%;
margin-top: 110px;
margin-right: auto;
margin-left:auto;
`

const StyledImageLarge = styled.img`
width: 18%;
max-height: 50%;
margin-top: 110px;
margin-right: auto;
margin-left:auto;
`


const StyledImageAlternative = styled.img`
max-height: 50%;
margin-top: 110px;
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


export function WorkSpaceShort({children, sourceImage, sourceIcon, link, imageSize = "default"}){
  return(
    <>
    <StyledLink to={link} target="_blank">      
    <StyledShortContainer>
        <StyledHeaderContainer>
          <StyledIconLanguage src={sourceIcon}></StyledIconLanguage>
          <StyledHeader>{children}</StyledHeader>
        </StyledHeaderContainer>

        {
        imageSize=='default'? <StyledImageShort src={sourceImage}></StyledImageShort> : <StyledImageAlternative src={sourceImage}></StyledImageAlternative>
        }
      </StyledShortContainer>
    </StyledLink>

    </>
  )

}

export function WorkSpaceLarge({children, sourceImage, sourceIcon, link, imageSize = "default"}){
  return(
    <>
    <StyledLink to={link} target="_blank"> 
      <StyledLargeContainer>
        <StyledHeaderContainer>
          <StyledIconLanguage src={sourceIcon}></StyledIconLanguage>
          <StyledHeader>{children}</StyledHeader>
        </StyledHeaderContainer>
        {
        imageSize=='default'? <StyledImageLarge src={sourceImage}></StyledImageLarge> : <StyledImageAlternative src={sourceImage}></StyledImageAlternative>
        }
      </StyledLargeContainer>
    </StyledLink>
    </>
  )

}