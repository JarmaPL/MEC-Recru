import React from "react";
import styled from "styled-components";
import { Div, Text, Icon } from "atomize";
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

const HotDeal = ({ hotdeals }) => (
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
        {hotdeals && hotdeals[0] ? (
          hotdeals.map((item) => (
            <CardItem
              nameOf={item.product.name}
              link={item.product.id}
              key={item.product.id}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed…
            </CardItem>
          ))
        ) : (
          <Div
            d="flex"
            flexDir="column"
            h="auto"
            m={{ t: "100px", b: "100px" }}
            align="center"
            justify="center"
          >
            <Icon name="Loading2" size="120px" />
            <TitleText textSize="70px" m="10px">
              Ładowanie....
            </TitleText>
          </Div>
        )}
      </ItemWrapper>
    </Div>
  </Wrapper>
);

export default HotDeal;
