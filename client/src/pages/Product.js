import { Div, Text, Button, Icon, Input, Notification } from "atomize";
import React, { useEffect, useState } from "react";
import { Formik, Form, isString } from "formik";
import { connect } from "react-redux";
import Header from "../components/Header";
import { getOneProduct } from "../services/actions/products";
import ItemPlaceholder from "../assets/img/ItemPicturePlaceholder.png";
import { cleanStatuts, postOrder } from "../services/actions/orders";

const ProductView = ({
  postOrder,
  getOneProduct,
  statusClean,
  data,
  error,
  status,
}) => {
  const [openNotification, setOpenNotification] = useState(false);
  const [errorCode, setErrorCode] = useState(0);

  const [openSuccesNotification, setOpenSuccesNotification] = useState(false);

  const [buttonDisabler, setButtonDisabler] = useState(false);

  useEffect(() => {
    const fetchData = async (id) => {
      await getOneProduct(id);
    };
    const id = window.location.pathname;
    fetchData(id);
    if (error) {
      setOpenNotification(true);
      if (error.includes("404")) {
        setErrorCode("404");
        setTimeout(() => setErrorCode(0), 4000);
        setTimeout(() => statusClean(), 4000);
      }
      if (error.includes("400")) {
        setErrorCode("400");
        setTimeout(() => setErrorCode(0), 4000);
        setTimeout(() => statusClean(), 4000);
      }
      if (error.includes("500")) {
        setErrorCode("404");
        setTimeout(() => setErrorCode(0), 4000);
        setTimeout(() => statusClean(), 4000);
      }
    }
    if (status) {
      setOpenSuccesNotification(true);
      setButtonDisabler(true);
      setTimeout(() => setButtonDisabler(false), 3000);
      setTimeout(() => statusClean(), 3000);
    }
  }, [
    getOneProduct,
    setOpenNotification,
    status,
    setOpenSuccesNotification,
    setButtonDisabler,
    statusClean,
    error,
  ]);

  if (data)
    return (
      <>
        <Header />
        <Notification
          bg="warning700"
          isOpen={openNotification}
          onClose={() => {
            setOpenNotification(false);
          }}
          prefix={
            <Icon
              name="AlertSolid"
              color="white"
              size="16px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          {errorCode === "404"
            ? "404 - Nie znaleziono produktu!"
            : "400 - Błąd w składaniu zamówienia"}
        </Notification>
        <Notification
          bg="success700"
          isOpen={openSuccesNotification}
          onClose={() => {
            setOpenSuccesNotification(false);
          }}
          prefix={
            <Icon
              name="Checked"
              color="white"
              size="20px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          Pomyślnie zakupiono produkt!
        </Notification>
        <Div
          w="100%"
          h="auto"
          d="flex"
          flexDir="row"
          justify="space-between"
          m={{ t: "100px" }}
        >
          <Div h="auto" w="50%" pos="relative">
            <img
              src={ItemPlaceholder}
              style={{
                width: "67%",
                height: "auto",
                transform: "scaleX(-1)",
                left: 0,
              }}
              alt="productImage"
            />
          </Div>
          <Div
            flexDir="column"
            d="flex"
            h="50vh"
            w="50%"
            p="100px"
            justify="space-between"
            align="flex-start"
          >
            <Div>
              <Text tag="h1" textSize="42px" textTransform="uppercase">
                {data.name}
              </Text>
              <Text textSize="16px">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed…
              </Text>
            </Div>
            <Text tag="h2" textSize="31px" textTransform="uppercase">
              Cena: {parseFloat(Number(data.price) / 100)} zł
            </Text>
            <Formik
              initialValues={{
                productId: data.productId,
                quality: 1,
              }}
              onSubmit={async ({ productId, quality }) => {
                await postOrder(productId, quality);
              }}
            >
              {({ setFieldValue, handleBlur, values, handleSubmit }) => (
                <>
                  <Form
                    style={{
                      alignItems: "flex-end",
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      height: "auto",
                      padding: "30px",
                      justifyContent: "space-between",
                    }}
                  >
                    <Div
                      d="flex"
                      flexDir="column"
                      justify="center"
                      align="center"
                    >
                      <Text textSize="12px" m={{ b: "10px" }}>
                        w magazynie: {data.stock}
                      </Text>
                      <Input
                        placeholder="ilość"
                        textAlign="center"
                        onChange={(e) => {
                          if (e.target.value >= data.stock) {
                            setFieldValue("quality", data.stock);
                          } else if (e.target.value <= 1) {
                            setFieldValue("quality", 1);
                          } else
                            setFieldValue(
                              "quality",
                              isString(Number(e.target.value)) ||
                                isNaN(Number(e.target.value))
                                ? 1
                                : e.target.value
                            );
                        }}
                        onBlur={handleBlur}
                        value={values.quality}
                        name="quality"
                        w="80px"
                        suffix={
                          <Button
                            pos="absolute"
                            onClick={() => {
                              if (values.quality >= data.stock) {
                                setFieldValue("quality", data.stock);
                              } else
                                setFieldValue(
                                  "quality",
                                  Number(values.quality) + 1
                                );
                            }}
                            bg="#262626"
                            hoverBg="black"
                            type="button"
                            top="0"
                            right="-3rem"
                          >
                            <Icon name="RightArrow" color="white" size="20px" />
                          </Button>
                        }
                        prefix={
                          <Button
                            pos="absolute"
                            onClick={() => {
                              if (values.quality <= 1) {
                                setFieldValue("quality", 1);
                              } else
                                setFieldValue(
                                  "quality",
                                  Number(values.quality) - 1
                                );
                            }}
                            bg="#262626"
                            hoverBg="black"
                            type="button"
                            top="0"
                            left="-3rem"
                          >
                            <Icon name="LeftArrow" color="white" size="20px" />
                          </Button>
                        }
                      />
                    </Div>
                    <Div
                      d="flex"
                      flexDir="column"
                      justify="center"
                      align="center"
                    >
                      <Text tag="span" textSize="12px" m={{ b: "10px" }}>
                        cena całkowita: {""}
                        <b>
                          {parseFloat(
                            values.quality * parseFloat(data.price / 100)
                          ).toFixed(2)}{" "}
                          zł
                        </b>
                      </Text>
                      <Button
                        w="150px"
                        disabled={
                          data.stock <= 0 || buttonDisabler ? true : false
                        }
                        onClick={(() => setButtonDisabler(true), handleSubmit)}
                        type="subbmit"
                      >
                        Zamów teraz!
                      </Button>
                    </Div>
                  </Form>
                </>
              )}
            </Formik>
          </Div>
        </Div>
      </>
    );
  else
    return (
      <Notification
        bg="warning700"
        isOpen={openNotification}
        onClose={() => {
          setOpenNotification(false);
        }}
        prefix={
          <Icon
            name="AlertSolid"
            color="white"
            size="16px"
            m={{ r: "0.5rem" }}
          />
        }
      >
        {errorCode === "404"
          ? "404 - Nie znaleziono produktu!"
          : errorCode === "400"
          ? "400 - Błąd w składaniu zamówienia"
          : "500 - Błąd serwera! spróbuj później"}
      </Notification>
    );
};

const mapStateToProps = (state) => ({
  data: state.productInfo,
  error: state.error,
  status: state.status,
});

const mapDispatchToProps = (dispatch) => ({
  getOneProduct: async (id) => {
    await dispatch(getOneProduct(id));
  },
  postOrder: async (productId, quality) => {
    await dispatch(postOrder(productId, quality));
  },
  statusClean: async () => {
    await dispatch(cleanStatuts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
