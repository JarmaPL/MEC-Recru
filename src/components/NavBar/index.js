import React from "react";
import styled from "styled-components";
import { Div, Container } from "atomize";

const Wrapper = styled.div`
  width: 100%ś;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

const BrandName = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-transform: uppercase;
`;

const NavigationBar = () => (
  <Wrapper>
    <Container>
      <BrandName>MEC.</BrandName>
      <Div>
        <p>newtext!</p>
      </Div>
    </Container>
  </Wrapper>
);

export default NavigationBar;
