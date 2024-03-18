import styled from "@emotion/styled"
import { colors } from "../styles"
import { Link } from "react-router-dom"

const StyledShortContainer = styled.div`
max-width: 90vw;
height: 500px;
background: ${colors.personalized1};
border-radius: 60px;
grid-area: shortcontainer;
`

const StyledLargeContainer = styled.div`
max-width: 90vw;
height: 500px;
background: ${colors.personalized5};
border-radius: 60px;
grid-area: largecontainer;
`

const StyledMainContainer= styled.div`
margin-left: auto;
margin-right: auto;
margin-bottom: 80px;
margin-top: 80px;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-areas: "largecontainer shortcontainer";
max-width: 90%;
justify-content: space-around;
gap: 15px;

@media only screen and (max-width: 800px) {
  grid-template-columns: 1fr;
  grid-template-areas: "largecontainer" 
  "shortcontainer";
}
`


const StyledMainContainerAlternative= styled.div`
margin-left: auto;
margin-right: auto;
margin-bottom: 80px;
margin-top: 80px;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-areas: "shortcontainer largecontainer";
max-width: 90%;
justify-content: space-around;
gap: 15px;

@media only screen and (max-width: 800px) {
  grid-template-columns: 1fr;
  grid-template-areas: "shortcontainer"
  "largecontainer" ;
}
`

const StyledMainContainerAlternative2= styled.div`
margin-left: auto;
margin-right: auto;
margin-bottom: 80px;
margin-top: 80px;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-areas: "largecontainer largecontainer";
max-width: 90%;
justify-content: space-around;
gap: 15px;

@media only screen and (max-width: 800px) {
  grid-template-columns: 1fr;
  grid-template-areas: 
  "largecontainer" ;
}
`



const StyledHeaderContainer = styled.div`
background: ${colors.white};
padding-top: 45px;
display: flex;
border-top-left-radius: 60px;
border-top-right-radius: 60px;
`

const StyledHeader = styled.h1`
padding-top: 0.5%;
line-height: 3vw;
font-size: 3vw;
color: ${colors.black};
text-align: right;
padding-bottom: 20px;
margin-right: auto;
background: ${colors.white};
@media only screen and (max-width: 800px) {
  line-height: 7vw;
  font-size: 7vw;
}
`

const StyledIconLanguage = styled.img`
background: ${colors.white};
height: 55px;
margin-left: auto;
margin-right: 20px;
filter: grayscale(50%);
`


const StyledImageShort = styled.img`
max-height: 45%;

margin-top: 50px;
margin-right: auto;
margin-left:auto;
`

const StyledImageLarge = styled.img`
max-height: 45%;

margin-top: 50px;
margin-right: auto;
margin-left:auto;
`


const StyledImageAlternative = styled.img`
max-height: 45%;
margin-top: 50px;
margin-right: auto;
margin-left:auto;
`

const StyledPicture = styled.img`
height: 100%;
width: 100%;
border-radius: 60px;
margin-right: auto;
margin-left: auto;
`

const StyledShortPictureContainer = styled.div`
max-width: 100%;
height: 600px;
background: ${colors.personalized1};
border-radius: 60px;
grid-area: picture1;
margin-right:auto;
margin-left:auto;
`

const StyledShortPictureContainer2 = styled.div`
width: 100%;
height: 600px;
background: ${colors.personalized1};
border-radius: 60px;
margin-right:auto;
margin-left:auto;
grid-area: picture2;
`

const StyledLargePictureContainer = styled.div`
width: 60%;
height: 50%;
background: ${colors.personalized5};
border-radius: 60px;
margin-right: auto;
margin-left: auto;
margin-top: 8vw;
margin-bottom: 2vw;

`

const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
`

export function PictureShortContainer({sourceImage}){
  return(
    <>
    <StyledShortPictureContainer>
      <StyledPicture src={sourceImage}></StyledPicture>
    </StyledShortPictureContainer>
    </>
  )
}


export function PictureShortContainer2({sourceImage}){
  return(
    <>
    <StyledShortPictureContainer2>
      <StyledPicture src={sourceImage}></StyledPicture>
    </StyledShortPictureContainer2>
    </>
  )
}




export function PictureLargeContainer({sourceImage}){
  return(
    <>
    <StyledLargePictureContainer>
      <StyledPicture src={sourceImage}></StyledPicture>
    </StyledLargePictureContainer>
    </>
  )
}

export function WorkSpaceContainer({children}){
  return(
    <>
      <StyledMainContainer>
        {children}
      </StyledMainContainer>
    </>
  )

}

export function WorkSpaceContainerAlternative({children}){
  return(
    <>
      <StyledMainContainerAlternative>
        {children}
      </StyledMainContainerAlternative>
    </>
  )

}

export function WorkSpaceContainerAlternative2({children}){
  return(
    <>
      <StyledMainContainerAlternative2>
        {children}
      </StyledMainContainerAlternative2>
    </>
  )

}


export function WorkSpaceShort({children, sourceImage, sourceIcon, link, imageSize = "default"}){
  return(
    <>
    <StyledShortContainer>
    <StyledLink to={link} target="_blank">      

        <StyledHeaderContainer>
          <StyledIconLanguage src={sourceIcon}></StyledIconLanguage>
          <StyledHeader>{children}</StyledHeader>
        </StyledHeaderContainer>

        {
        imageSize=='default'? <StyledImageShort src={sourceImage}></StyledImageShort> : <StyledImageAlternative src={sourceImage}></StyledImageAlternative>
        }
    </StyledLink>

    </StyledShortContainer>

    </>
  )

}

export function WorkSpaceLarge({children, sourceImage, sourceIcon, link, imageSize = "default"}){
  return(
    <>
      <StyledLargeContainer>
      <StyledLink to={link} target="_blank"> 

        <StyledHeaderContainer>
          <StyledIconLanguage src={sourceIcon}></StyledIconLanguage>
          <StyledHeader>{children}</StyledHeader>
        </StyledHeaderContainer>
        {
        imageSize=='default'? <StyledImageLarge src={sourceImage}></StyledImageLarge> : <StyledImageAlternative src={sourceImage}></StyledImageAlternative>
        }
        </StyledLink>
      </StyledLargeContainer>
    </>
  )

}