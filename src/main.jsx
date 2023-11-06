import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { persistor, store } from "./redux/store";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
