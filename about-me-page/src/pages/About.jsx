import styled from "@emotion/styled";

import NavegationBar from "../components/NavegationBar";
import { PageHeader } from "../components/PageHeader";
import ProfileImage from "../components/ProfileImage";
import { PageDescriptionAlternative } from "../components/PageDescription";
import { colors } from "../styles";
import FootBar from "../components/FootBar";


const ProfileContainer = styled.div`
width: 1200px;
margin-right: auto;
margin-left: auto;
margin-top: 6rem;
display: flex;
` 
const Header = styled.h2`
  line-height: 4rem;
  font-size: 4rem;
  color: ${colors.stone[300]};
  text-align: center;
`
const HeaderContainer = styled.div`
display:flex;
justify-content: center;
margin-right: auto;
margin-left: auto;
`

const HeaderAndDescriptionContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
margin-right: auto;
margin-left: 2rem;
`



export default function About() {
return (
  <>
    <NavegationBar/>
    <PageHeader children={"I'm Angelo."}/>
    <ProfileContainer>
      <ProfileImage/>
      <HeaderAndDescriptionContainer>
      <HeaderContainer>
        <Header>I'm a full stack developer working remotely from Brazil.</Header>
      </HeaderContainer>
      <PageDescriptionAlternative>
      I graduated as an Industrial Engineer, and worked in Finance and Human Resources. But, I decided to start a career in 
      full-stack development, and science computing. I'm proud to be doing a Master Degree right now. 
      These days, I focus on working with Virtual Reality, and game development.
      </PageDescriptionAlternative>
      </HeaderAndDescriptionContainer>
    </ProfileContainer>
    <FootBar/>

  </>
)
}