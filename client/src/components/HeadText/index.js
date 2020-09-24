import React from "react";
import styled from "styled-components";
import { Div, Text } from "atomize";
import DecoratorOne from "../../assets/img/dots.svg";

const Wrapper = styled.div`
  width: 45%;
  height: 500px;
  padding: 15px;
  font-family: Montserrat;
  font-weight: 400;
  margin: 180px 0 0 7%;
`;

const TitleText = styled(Text)`
  position: relative;
  height: auto;
  &::before {
    width: 180px;
    content: " ";
    z-index: -1;
    top: -10px;
    left: -10px;
    position: absolute;
    height: 90px;
    background-color: #fed518;
  }
`;

const HeadText = ({ title, children }) => (
  <Wrapper>
    <TitleText tag="h1" textSize="82px" m="5px">
      {title}
    </TitleText>
    <Div>
      <Text textSize="24px" tag="span" m="5px">
        {children}
      </Text>
    </Div>
    <Div
      w="40%"
      h="500px"
      pos="absolute"
      right="0"
      top="25%"
      overflow="hidden"
      bgImg={DecoratorOne}
      bgPos="center"
      bgSize="cover"
    />
  </Wrapper>
);

export default HeadText;
