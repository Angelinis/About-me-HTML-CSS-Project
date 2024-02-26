import NavegationBar from "../components/NavegationBar";
import { PageHeader } from "../components/PageHeader";

import { FaChessKing, FaChessKnight, FaChessQueen, FaChessRook } from "react-icons/fa";
import { IconContext } from "react-icons";
import styled from "@emotion/styled";
import { colors } from "../styles";
import { PageDescription } from "../components/PageDescription";

const Container = styled.div`
width: 1000px;
margin-right: auto;
margin-left: auto;
`


const FigureContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 1.5rem;
`

const FigureBackground = styled.div`
display: flex;
height: 4rem;
width: 4rem;
background: ${colors.gray[300]};
border-radius: 25px;
justify-content: center;
align-items: center;
`


export default function Home() {
return (
  <>
    <NavegationBar/>
    <IconContext.Provider value={{ color: colors.gray[800], size: "3rem" }}>

      <Container>

        <PageHeader children={"Hi! I am Angelo."}/>
        <PageHeader children={"A full stack designer."}/>

        <FigureContainer>
          <FigureBackground><FaChessKing/></FigureBackground>
          <FigureBackground><FaChessRook /></FigureBackground>
          <FigureBackground><FaChessQueen/></FigureBackground>
          <FigureBackground><FaChessKnight/></FigureBackground>       
        </FigureContainer>

      </Container>
    </IconContext.Provider>
    <PageDescription>I have a passion for learning new technologies. Recently, I’ve been diving into Meta Quest 2, exploring its development and usage. </PageDescription>
  </>
)
}