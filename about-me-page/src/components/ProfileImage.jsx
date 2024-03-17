import styled from "@emotion/styled"
import profile from '../assets/profilewebpage.jpeg'

const StyledImage = styled.img`
max-width: 300px;
border-top-left-radius: 140px;
border-top-right-radius: 140px;
grid-area: content1;
margin-left:auto;
margin-right:auto;
`

export default function ProfileImage() {
  return (
    <>
      <StyledImage src={profile} alt="profile"></StyledImage>
    </>
  )
}