import styled from "@emotion/styled";

import NavegationBar from "../components/NavegationBar";
import { PageHeader } from "../components/PageHeader";
import ProfileImage from "../components/ProfileImage";
import { colors } from "../styles";

const ProfileContainer = styled.div`
width: 1000px;
margin-right: auto;
margin-left: auto;
margin-top: 6rem;
display: flex;
` 
const Header = styled.h2`
  line-height: 3rem;
  font-size: 3rem;
  color: ${colors.stone[300]};
  text-align: center;
`
const HeaderContainer = styled.div`
display:flex;
justify-content: center;
margin-right: auto;
margin-left: 40px;
`


export default function About() {
return (
  <>
    <NavegationBar/>
    <PageHeader children={"I'm Angelo."}/>
    <ProfileContainer>
      <ProfileImage/>
      <HeaderContainer>
        <Header>I'm a full stack developer working remotely from Brazil.</Header>
      </HeaderContainer>
    </ProfileContainer>
  </>
)
}