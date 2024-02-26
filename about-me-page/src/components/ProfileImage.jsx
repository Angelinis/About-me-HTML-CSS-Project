import styled from "@emotion/styled"

const StyledImage = styled.img`
max-width: 300px;
border-top-left-radius: 140px;
border-top-right-radius: 140px;
`

export default function ProfileImage() {
  return (
    <>
      <StyledImage src="https://avatars.githubusercontent.com/u/41450351?v=4" alt="profile"></StyledImage>
    </>
  )
}