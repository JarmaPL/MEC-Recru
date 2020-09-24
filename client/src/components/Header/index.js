import React from "react";
import styled from "styled-components";
import { Div, Text } from "atomize";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  font-family: Montserrat;
  font-weight: 400;
`;

const BrandName = styled.div`
  font-size: 76px;
  font-weight: 900;
  text-transform: uppercase;
  font-family: Montserrat;
`;

const Header = () => (
  <Wrapper>
    <BrandName>MEC.</BrandName>
    <Div>
      <Text textSize="17px" position="absolute" top="0" right="0">
        @Szymon Jarmuszczak - rekrutacja Erli
      </Text>
    </Div>
  </Wrapper>
);

export default Header;
