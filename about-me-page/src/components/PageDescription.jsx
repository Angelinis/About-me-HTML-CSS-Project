import styled from "@emotion/styled"
import { colors } from "../styles"
import { font } from "../styles"

const Content = styled.p`
  line-height: 160%;
  font-size: 140%;
  color: ${colors.stone[200]};
  text-align: center;
  font-family: ${font.secondary};
`
const ContentContainer = styled.div`
display:flex;
justify-content: center;
max-width: 70%;
margin-right: auto;
margin-left: auto;
margin-bottom: 3rem;
margin-top: 5vw;
`

const ContentAlternative = styled.p`
  line-height: 200%;
  font-size: 130%;
  color: ${colors.stone[200]};;
  font-family: ${font.secondary};
`
const ContentContainerAlternative = styled.div`
display:flex;
justify-content: center;
width: 75%;
margin-right: auto;
margin-left: auto;
margin-top: 5rem;
margin-bottom: 3rem;
`
const ContentAlternativeWithBackground = styled.span`
  display: inline;
  line-height: 2.5rem;
  font-size: 1.3rem;
  // color: ${colors.gray[800]};
  color: ${colors.stone[300]};
  font-family: ${font.secondary};
  // background: ${colors.stone[300]};
`


export function PageDescription({children}){
  return (
    <>  
    <ContentContainer>
      <Content>{children}</Content>
    </ContentContainer>
    </>
  )
}

export function PageDescriptionAlternative({children}){
  return (
    <>  
    <ContentContainerAlternative >
      <ContentAlternative>{children}</ContentAlternative>
    </ContentContainerAlternative >
    </>
  )
}

export function PageDescriptionWithBackground({children}){
  return (
    <>  
    <ContentContainerAlternative >
      <p><ContentAlternativeWithBackground>{children}</ContentAlternativeWithBackground></p>
    </ContentContainerAlternative >
    </>
  )
}