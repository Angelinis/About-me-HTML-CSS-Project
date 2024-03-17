import NavegationBar from "../components/NavegationBar";
import { PageHeader } from "../components/PageHeader";

import { FaChessKing, FaChessKnight, FaChessQueen, FaChessRook } from "react-icons/fa";
import { IconContext } from "react-icons";
import styled from "@emotion/styled";
import { colors } from "../styles";
import { PageDescription } from "../components/PageDescription";
import {WorkSpaceContainer, WorkSpaceLarge, WorkSpaceShort} from "../components/WorkSpace";
import FootBar from "../components/FootBar";

import gameWebpage from "../assets/EscapeINFLogo.png";
import deliveryApp from "../assets/PhoneDeliveryApp.png";
import gameIcon from "../assets/Godot.png";
import deliveryIcon from "../assets/React.png";
import tweetApp from "../assets/TweetableApp.png";
import tweetIcon from "../assets/RubyOnRails.png";
import passwordApp from "../assets/PhonePasswordApp.png";
import passwordIcon from "../assets/ReactNative.png";
import hateDetectionIcon from "../assets/GoogleCollab.png";
import hateDetectionNotebook from "../assets/NotebookNLP.png";
import escapeVRApp from "../assets/MetaQuest.png";
import escapeVRIcon from "../assets/Unity.png";



const Container = styled.div`
width: 95%;
margin-right: auto;
margin-left: auto;
height: 100%;
`


const FigureContainer = styled.div`
display: flex;
justify-content: space-between;
width: 95%;
margin-top: 5vw;
margin-right: auto;
margin-left: auto;
margin-bottom: 5vw;
`

const FigureBackground = styled.div`
display: flex;
width: 8%;
background: ${colors.gray[300]};
border-radius: 40px;
justify-content: center;
align-items: center;
`


export default function Home() {
return (
  <>
    <NavegationBar/>
    <IconContext.Provider value={{ color: colors.gray[800], size: "60%" }}>

      <Container>

        <PageHeader children={"Hi! I am Angelo."}/>
        <PageHeader children={"A full stack developer."}/>

        <FigureContainer>
          <FigureBackground><FaChessKing/></FigureBackground>
          <FigureBackground><FaChessRook /></FigureBackground>
          <FigureBackground><FaChessQueen/></FigureBackground>
          <FigureBackground><FaChessKnight/></FigureBackground>       
        </FigureContainer>

      </Container>
    </IconContext.Provider>
    <PageDescription>
      I have a passion for learning new technologies. 
      Recently, I’ve been diving into Meta Quest 2, exploring its development and usage. 
    </PageDescription>

    <WorkSpaceContainer>
    <WorkSpaceShort sourceImage={gameWebpage} link={'https://infgames.itch.io/escape-inf'} sourceIcon={gameIcon}>Escape Game</WorkSpaceShort>
    <WorkSpaceLarge sourceImage={deliveryApp} link={'https://github.com/Angelinis/Eatable-Project-Remastered'} sourceIcon={deliveryIcon}>Delivery Phone App</WorkSpaceLarge>
    </WorkSpaceContainer>

    <WorkSpaceContainer>
    <WorkSpaceLarge sourceImage={tweetApp} link={'https://github.com/Angelinis/tweetable-app'} sourceIcon={tweetIcon}>Tweet App</WorkSpaceLarge>
    <WorkSpaceShort sourceImage={passwordApp} link={'https://github.com/Angelinis/React-Native-Gerador'} sourceIcon={passwordIcon} imageSize="diferent">Password App</WorkSpaceShort>
    </WorkSpaceContainer>

    <WorkSpaceContainer>
    <WorkSpaceLarge sourceImage={hateDetectionNotebook} link={'https://colab.research.google.com/drive/12ve2Gfq77MJVa9bZw5b19v2n_7ER1-4T?usp=sharing'} sourceIcon={hateDetectionIcon} imageSize="diferent">Detection of Hate Speech</WorkSpaceLarge>
    </WorkSpaceContainer>


    <PageHeader children={"In progress."}/>
    <PageDescription>
    Ongoing projects at different stages of design 
     and development, <br/> ranging from team research, to side projects.
    </PageDescription>

    <WorkSpaceContainer>
    <WorkSpaceLarge sourceImage={escapeVRApp} link={'https://github.com/Angelinis/VR_Escape_room_2021'} sourceIcon={escapeVRIcon} imageSize="diferent">Escape VR Game</WorkSpaceLarge>
    <WorkSpaceShort sourceImage={hateDetectionNotebook} link={'https://colab.research.google.com/drive/1VipKLBK1liKgPO3N6Ub9rdjeT9MGwHby?usp=sharing'} sourceIcon={hateDetectionIcon} imageSize="diferent">Juridical Agent</WorkSpaceShort>
    </WorkSpaceContainer>

    <FootBar/>
  </>
)
}