import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./components/Loader";
import React from "react";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}
