import React from "react";
import styled from "styled-components";
import { Div, Text } from "atomize";
import BlockDecorator from "../../assets/img/block.svg";
import CardItem from "../ItemCard";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

const TitleText = styled(Text)`
  position: relative;
  margin-left: 200px;
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

const ItemWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const HotDeal = () => (
  <Wrapper>
    <Div w="28%" pos="relative" h="auto">
      <img
        style={{
          position: "absolute",
          top: "-180px",
          width: "100%",
          height: "auto",
        }}
        alt="DecorationElement"
        src={BlockDecorator}
      />
    </Div>
    <Div w="67%">
      <TitleText tag="h1" textSize="82px" m="10px">
        Hot Deals
        <span role="img" aria-label="fire">
          🔥
        </span>
      </TitleText>
      <ItemWrapper>
        <CardItem nameOf="Kosiarka">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed…
        </CardItem>
        <CardItem nameOf="Kosiarka">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed…
        </CardItem>
        <CardItem nameOf="Kosiarka">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed…
        </CardItem>
      </ItemWrapper>
    </Div>
  </Wrapper>
);

export default HotDeal;
