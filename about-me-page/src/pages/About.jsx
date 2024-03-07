import styled from "@emotion/styled";

import NavegationBar from "../components/NavegationBar";
import { PageHeader } from "../components/PageHeader";
import ProfileImage from "../components/ProfileImage";
import { PageDescriptionAlternative, PageDescriptionWithBackground } from "../components/PageDescription";
import { colors } from "../styles";
import FootBar from "../components/FootBar";
import { PictureLargeContainer, PictureShortContainer } from "../components/WorkSpace";

import wallpaper_1 from "../assets/Wallpaper/Wallpaper_1.jpeg";
import wallpaper_2 from "../assets/Wallpaper/Wallpaper_5.jpeg";
import wallpaper_3 from "../assets/Wallpaper/Wallpaper_2.jpeg";


const StyledMainContainer= styled.div`
margin-left: auto;
margin-right: auto;
margin-bottom: 80px;
margin-top: 100px;
display: flex;
justify-content: space-around;
width: 1300px;
`


const ProfileContainer = styled.div`
width: 1200px;
margin-right: auto;
margin-left: auto;
margin-top: 6rem;
margin-bottom: 2rem;
display: flex;
` 
const Header = styled.h2`
  line-height: 4rem;
  font-size: 4rem;
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


    <PageHeader children={". . ."}/>

    <StyledMainContainer>
      <PictureLargeContainer sourceImage={wallpaper_3} />
    </StyledMainContainer>  

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
      <PictureLargeContainer sourceImage={wallpaper_2} />
    </StyledMainContainer>




    <FootBar/>

  </>
)
}
