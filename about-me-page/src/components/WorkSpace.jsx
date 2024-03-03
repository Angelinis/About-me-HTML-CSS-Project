import styled from "@emotion/styled"
import { colors } from "../styles"

const StyledContainer = styled.div`
width: 500px;
height: 600px;
background: ${colors.personalized1};
border-radius: 60px;
`

const StyledContainerAlternative = styled.div`
max-width: 1000px;
min-width: 500px;
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

const StyledHeader = styled.h1`
line-height: 3rem;
font-size: 3rem;
color: ${colors.black};
text-align: right;
margin-top: 100px;
margin-right: 60px;
margin-left: auto;
`

const StyledHeaderContainer = styled.div`

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


export function WorkSpaceShort({children}){
  return(
    <>
      <StyledContainer>
        <StyledHeaderContainer>
        <StyledHeader>{children}</StyledHeader>
        </StyledHeaderContainer>
      </StyledContainer>
    </>
  )

}

export function WorkSpaceLarge({children}){
  return(
    <>
      <StyledContainerAlternative>
        <StyledHeaderContainer>
        <StyledHeader>{children}</StyledHeader>
        </StyledHeaderContainer>
      </StyledContainerAlternative>
    </>
  )

}