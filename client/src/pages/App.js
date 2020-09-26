import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import HeadText from "../components/HeadText";
import HotDeal from "../components/HotDeals";
import OfferMainView from "../components/MainOffer";
import { getHotDeals, getProducts } from "../services/actions/products";

const App = ({ getHotDeals, hotdeals, getProducts, products }) => {
  useEffect(() => {
    const fetchData = async () => {
      await getProducts();
    };
    const fetchHotDeals = async () => {
      await getHotDeals();
    };
    fetchHotDeals();
    fetchData();
  }, [getProducts, getHotDeals]);

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
      <HotDeal hotdeals={hotdeals} />
      <OfferMainView products={products} />
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.productList,
  hotdeals: state.hotdeals,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: async () => {
    await dispatch(getProducts());
  },
  getHotDeals: async () => {
    await dispatch(getHotDeals());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
