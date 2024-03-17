import styled from "@emotion/styled";

import NavegationBar from "../components/NavegationBar";
import { PageHeader } from "../components/PageHeader";
import ProfileImage from "../components/ProfileImage";
import { PageDescriptionAlternative, PageDescriptionWithBackground } from "../components/PageDescription";
import { colors } from "../styles";
import FootBar from "../components/FootBar";
import { PictureLargeContainer, PictureShortContainer, PictureShortContainer2 } from "../components/WorkSpace";

import wallpaper_1 from "../assets/Wallpaper/Wallpaper_1.jpeg";
import wallpaper_2 from "../assets/Wallpaper/Wallpaper_5.jpeg";
import wallpaper_3 from "../assets/Wallpaper/Wallpaper_2.jpeg";


const StyledMainContainer= styled.div`
margin-left: auto;
margin-right: auto;
margin-bottom: 80px;
margin-top: 100px;
display: grid;
justify-content: space-around;
grid-template-columns: 1fr 1fr 1fr;
grid-template-areas: "picture1 picture2 picture2";
width: 80%;
gap: 50px;
@media only screen and (max-width: 800px) {
  grid-template-columns: 1fr;
  grid-template-areas:
  "picture1"
  "picture2"
  ;
}
`


const ProfileContainer = styled.div`
width: 80%;
margin-right: auto;
margin-left: auto;
margin-top: 4rem;
margin-bottom: 2rem;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-areas: "content1 content2 content2";
@media only screen and (max-width: 1000px) {
  grid-template-columns: 1fr;
  grid-template-areas:
  "content2"
  "content1"
  ;
}
` 
const Header = styled.h2`
  line-height: 120%;
  font-size: 240%;
  color: ${colors.stone[300]};
  text-align: center;
`

const HeaderAlternative = styled.h2`
  line-height: 5.5rem;
  font-size: 5.5rem;
  color: ${colors.gray[800]};
  text-align: center;
  background: ${colors.stone[300]};
`

const HeaderAlternativeContainer = styled.div`
display:flex;
justify-content: center;
margin-right: auto;
margin-left: auto;
margin-top: 180px;
`


const HeaderContainer = styled.div`
display:flex;
justify-content: center;
margin-right: auto;
margin-left: auto;
width: 100%;
`

const HeaderAndDescriptionContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
margin-right: auto;
margin-left: auto;
grid-area: content2;
width: 100%;
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


    <PageHeader children={". . ."}/>

      <PictureLargeContainer sourceImage={wallpaper_3} />


    <PageHeader children={". . ."}/>

    <HeaderAlternativeContainer>
        <HeaderAlternative>A little more about Angelo.</HeaderAlternative>
    </HeaderAlternativeContainer>



    <PageDescriptionWithBackground>
    Before delving into the realms of full-stack and game design, 
    I gained valuable experience in Human Resources and finance roles.
    My time in HR significantly enhanced my social and 
    teamwork skills through interactions with candidates and colleagues from an international team. 
    <br/><br/> 
    Driven by a longstanding passion for technology, I made the decision 
    to transition into this field. I consider myself inherently 
    curious about emerging technologies 
    and constantly strive to expand my knowledge base.   
    <br/><br/> 

    Outside of work, I enjoy unwinding by pursuing artistic hobbies 
    like drawing, strumming away on my guitar, exploring new places 
    through travel, and kicking back with friends for some video game
     fun. Additionally, I find relaxation in exercising as well.  
    </PageDescriptionWithBackground>

      

    <StyledMainContainer>
      <PictureShortContainer sourceImage={wallpaper_1} />
      <PictureShortContainer2  sourceImage={wallpaper_2} />
    </StyledMainContainer>




    <FootBar/>

  </>
)
}
