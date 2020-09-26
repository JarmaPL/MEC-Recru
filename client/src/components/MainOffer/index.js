import React from "react";
import styled from "styled-components";
import { Div, Text, Icon } from "atomize";
import WiresDecoration from "../../assets/img/wirers.svg";
import CircleDecoration from "../../assets/img/circle.svg";
import CardItem from "../ItemCard";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
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
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
`;

const OfferMainView = ({ products }) => (
  <Wrapper>
    <Div w="100%">
      <TitleText tag="h1" textSize="82px" m={{ l: "100px" }}>
        Oferta:
      </TitleText>
      <ItemWrapper>
        {products && products[0] ? (
          products.map((item) => (
            <CardItem nameOf={item.name} key={item.id} link={item.id}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed…
            </CardItem>
          ))
        ) : (
          <Div
            d="flex"
            flexDir="column"
            h="50vh"
            m={{ t: "200px", b: "200px" }}
            align="center"
            justify="center"
          >
            <Icon name="Loading2" size="350px" />
            <TitleText textSize="100px" m="10px">
              Ładowanie....
            </TitleText>
          </Div>
        )}
      </ItemWrapper>
    </Div>
    <img
      style={{
        position: "absolute",
        width: "49%",
        height: "auto",
        top: "-100px",
        right: "0",
        zIndex: "-1",
      }}
      alt="DecorationElement"
      src={WiresDecoration}
    />
    <img
      style={{
        position: "absolute",
        width: "50%",
        height: "auto",
        bottom: "-480px",
        left: "-380px",
        zIndex: "-1",
      }}
      alt="DecorationElementBottom"
      src={CircleDecoration}
    />
  </Wrapper>
);

export default OfferMainView;
