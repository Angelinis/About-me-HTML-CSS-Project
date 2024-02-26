import styled from "@emotion/styled"
import { colors } from "../styles/colors"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from 'react-router-dom'



const NavegationContainer = styled.div`
display: flex;
justify-content: center;
gap: 3.5rem;
margin-right: auto;
margin-left: auto;
width: 400px;
margin-top: 2rem;
margin-bottom: 5rem;

a.active button {
  background-color:${colors.gray[500]};
  border-radius: 8px;
  min-width: 100px;
}

`
const NavegationButton = styled.button`
background-color: inherit;
border: none;
line-height: 2rem;
font-size: 1.2rem;
color: ${colors.white}
`

const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
`



export default function NavegationBar() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
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
    </>
  )
}