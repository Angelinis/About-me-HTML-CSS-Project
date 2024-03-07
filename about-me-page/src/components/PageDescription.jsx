import styled from "@emotion/styled"
import { colors } from "../styles"
import { font } from "../styles"

const Content = styled.p`
  line-height: 2.5rem;
  font-size: 1.3rem;
  color: ${colors.stone[200]};
  text-align: center;
  font-family: ${font.secondary};
`
const ContentContainer = styled.div`
display:flex;
justify-content: center;
width: 600px;
margin-right: auto;
margin-left: auto;
margin-top: 5rem;
margin-bottom: 3rem;
`

const ContentAlternative = styled.p`
  line-height: 2.5rem;
  font-size: 1.3rem;
  color: ${colors.stone[200]};;
  font-family: ${font.secondary};
`
const ContentContainerAlternative = styled.div`
display:flex;
justify-content: center;
width: 800px;
margin-right: auto;
margin-left: auto;
margin-top: 5rem;
margin-bottom: 3rem;
`
const ContentAlternativeWithBackground = styled.span`
  display: inline;
  line-height: 2.5rem;
  font-size: 1.3rem;
  color: ${colors.gray[800]};
  font-family: ${font.secondary};
  background: ${colors.stone[300]};
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