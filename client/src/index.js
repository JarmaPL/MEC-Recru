import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider } from "react-redux";
import { store, persistor } from "./services/store";
import { PersistGate } from "redux-persist/integration/react";

const engine = new Styletron();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StyletronProvider value={engine}>
        <App />
      </StyletronProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
