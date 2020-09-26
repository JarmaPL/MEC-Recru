import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import storageSession from "redux-persist/lib/storage/session";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["data"],
};
const persistReducera = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistReducera,
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
