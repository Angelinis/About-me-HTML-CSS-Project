import styled from "@emotion/styled"
import { colors } from "../styles"

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
margin-top: 100px;
`

const StyledHeader = styled.h1`
line-height: 3rem;
font-size: 3rem;
color: ${colors.black};
text-align: right;
margin-right: 60px;
margin-left: auto;
`

const StyledImage = styled.img`
width: 70%;
margin-top: 60px;
margin-right: auto;
margin-left:auto;
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


export function WorkSpaceShort({children, sourceImage}){
  return(
    <>
      <StyledShortContainer>
        <StyledHeaderContainer>
        <StyledHeader>{children}</StyledHeader>
        </StyledHeaderContainer>

        <StyledImage src={sourceImage}></StyledImage>
      </StyledShortContainer>
    </>
  )

}

export function WorkSpaceLarge({children, sourceImage}){
  return(
    <>
      <StyledLargeContainer>
        <StyledHeaderContainer>
        <StyledHeader>{children}</StyledHeader>
        </StyledHeaderContainer>

        <StyledImage src={sourceImage}></StyledImage>
      </StyledLargeContainer>
    </>
  )

}