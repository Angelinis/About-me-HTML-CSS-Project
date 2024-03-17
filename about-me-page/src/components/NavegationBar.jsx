import styled from "@emotion/styled"
import { colors } from "../styles/colors"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from 'react-router-dom'

import { FaSun , FaMoon } from "react-icons/fa";
import { IconContext } from "react-icons";


const NavegationContainer = styled.div`
display: flex;
justify-content: center;
gap: 3.5rem;
margin-right: auto;
margin-left: auto;
width: 400px;

a.active button {
  background-color:${colors.gray[500]};
  border-radius: 20px;
  min-width: 100px;
}
`


const NavegationBarContainer = styled.div`
display: flex;
gap: 3.5rem;
align-items: center;
height: 4rem;
position: fixed;
margin-top: 20px;
padding-right: 10px;
z-index: 999;
left: 50vw;
transform: translateX(-50%);
border-radius: 40px; 
background: ${colors.personalized9};
`

const FigureContainer = styled.div`
display: flex;
justify-content: space-between;
gap: 0.6rem;
`

const FigureBackground = styled.div`
display: flex;
height: 2.5rem;
width: 2.5rem;
background: inherit;
border-radius: 25px;
justify-content: center;
align-items: center;
cursor:pointer;

.selectedBackground {
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  background: ${colors.gray[500]};
  border-radius: 25px;
  justify-content: center;
  align-items: center;
}
`

const NavegationButton = styled.button`
background-color: inherit;
border: none;
line-height: 2rem;
font-size: 1.2rem;
color: ${colors.white};
cursor:pointer;
`

const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
`

const BackSpace = styled.div`
height: 180px;
`


export default function NavegationBar() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
    <BackSpace>
    <NavegationBarContainer>
    <NavegationContainer>
      
      <StyledLink to="/" className={pathname === '/' ? 'active' : ''}>
        <NavegationButton>Work</NavegationButton>
      </StyledLink>
    
    
      <StyledLink to="/about" className={pathname === '/about' ? 'active' : ''}>  
        <NavegationButton>About</NavegationButton>
      </StyledLink>
      
      
      <StyledLink to="/contact" className={pathname === '/contact' ? 'active' : ''}>
        <NavegationButton>Contact</NavegationButton>     
      </StyledLink>
             
    </NavegationContainer>
    
    {/* <IconContext.Provider value={{ color: colors.white, size: "1.5rem" }}>

      <FigureContainer>
        
        <FigureBackground><FaMoon/></FigureBackground>
        <FigureBackground><FaSun/></FigureBackground>

      </FigureContainer>
    </IconContext.Provider> */}

    </NavegationBarContainer>
    </BackSpace>
    </>
  )
}

