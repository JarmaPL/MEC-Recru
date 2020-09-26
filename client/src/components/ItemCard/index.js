import React from "react";
import styled from "styled-components";
import ItemPlaceholder from "../../assets/img/ItemPicturePlaceholder.png";
import { Button, Div, Text, Icon } from "atomize";

const Wrapper = styled.div`
  width: 320px;
  height: 460px;
  border-radius: 15px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  padding: 15px;
  font-family: Montserrat;
  position: relative;
  font-weight: 400;
  box-shadow: 1px 0px 7px 1px rgba(0, 0, 0, 0.4);
`;

const ProductName = styled.div`
  font-size: 26px;
  font-weight: 600;
  margin-top: 300px;
  text-transform: uppercase;
  font-family: Montserrat;
`;

const CardItem = ({ nameOf, link, children }) => (
  <Wrapper>
    <Div h="60%" w="100%" pos="relative">
      <img
        src={ItemPlaceholder}
        style={{
          width: "75%",
          height: "auto",
          position: "absolute",
          top: "10px",
          right: "-15px",
        }}
        alt="productImage"
      />
    </Div>
    <ProductName>{nameOf}</ProductName>
    <Div
      flexDir="column"
      d="flex"
      h="400%"
      w="100%"
      justify="space-between"
      align="center"
    >
      <Text textSize="11px">{children}</Text>
      <Div align="flex-end" d="flex" flexDir="row" w="100%" justify="flex-end">
        <Button
          w="110px"
          suffix={
            <Icon name="LongRight" size="22px" color="white" m={{ l: "8px" }} />
          }
          onClick={() => (window.location.href = `/${link}`)}
        >
          Zamów
        </Button>
      </Div>
    </Div>
  </Wrapper>
);

export default CardItem;
