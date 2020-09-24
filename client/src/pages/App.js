import React from "react";
import Header from "../components/Header";
import HeadText from "../components/HeadText";
import HotDeal from "../components/HotDeals";
import OfferMainView from "../components/ManOffer";

const App = () => {
  return (
    <>
      <Header />
      <HeadText title="Odkryj nasz sklep!">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet…
      </HeadText>
      <HotDeal />
      <OfferMainView />
    </>
  );
};

export default App;
