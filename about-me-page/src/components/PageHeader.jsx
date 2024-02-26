import styled from "@emotion/styled"
import { colors } from "../styles"

const Header = styled.h1`
  line-height: 7rem;
  font-size: 7rem;
  color: ${colors.stone[300]};
  text-align: center;
`
const HeaderContainer = styled.div`
display:flex;
justify-content: center;
width: 1000px;
margin-right: auto;
margin-left: auto;
`

export function PageHeader({children}){
  return (
    <>  
    <HeaderContainer>
      <Header>{children}</Header>
    </HeaderContainer>
    </>
  )
}