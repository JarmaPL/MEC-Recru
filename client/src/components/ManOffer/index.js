import React from "react";
import styled from "styled-components";
import { Div, Text, Icon, Button } from "atomize";
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
  z-index: -1;
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

const OfferMainView = () => (
  <Wrapper>
    <Div w="100%">
      <TitleText tag="h1" textSize="82px" m={{ l: "100px" }}>
        Oferta:
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
        <CardItem nameOf="Kosiarka">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed…
        </CardItem>
      </ItemWrapper>
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
        <CardItem nameOf="Kosiarka">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed…
        </CardItem>
      </ItemWrapper>
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
        <CardItem nameOf="Kosiarka">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed…
        </CardItem>
      </ItemWrapper>
      <Div d="flex" w="100%" flexDir="row" align="center" justify="center">
        <Button
          h="2.5rem"
          w="2.5rem"
          bg="black"
          rounded="circle"
          m={{ r: "1rem" }}
          shadow="2"
          hoverShadow="4"
        >
          <Icon name="LeftArrow" size="1.2rem" color="white" />
        </Button>
        <h1>STRONA 1 / x</h1>
        <Button
          h="2.5rem"
          w="2.5rem"
          bg="black"
          rounded="circle"
          m={{ l: "1rem" }}
          shadow="2"
          hoverShadow="4"
        >
          <Icon name="RightArrow" size="1.2rem" color="white" />
        </Button>
      </Div>
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
