import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  `
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex:1;`
const Midlle = styled.div`
  flex:1;`
const Right = styled.div`
  flex:1;`
const Language = styled.div`
  font-size:14px;
  cursor:pointer;
  `
const NavBar = () => {
  return(
  <Container>
    <Wrapper>
      <Left><Language>EN</Language></Left>
      <Midlle>Midlle</Midlle>
      <Right>Right</Right>
    </Wrapper>
  </Container>
  )
}

export default NavBar;
