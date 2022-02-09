import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateQrCode from "./components/CreateQrcode";
import ReaderQrCode from "./components/ReaderQrCode";
import PmForm from "./components/PmForm";
import SuccesForm from "./components/SuccesForm";
import Header from "./components/Header";
import UseManual from "./components/UseManual";
import { PREFIX_PATH } from "./helper/constants";

//################################# APP ####################################
function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route exact path={`${PREFIX_PATH}/`} element={<UseManual />} />
          <Route
            exact
            path={`${PREFIX_PATH}/create-qrcode`}
            element={<CreateQrCode />}
          />
          <Route
            exact
            path={`${PREFIX_PATH}/reader-qrcode`}
            element={<ReaderQrCode />}
          />
          <Route
            exact
            path={`${PREFIX_PATH}/reader-qrcode/form`}
            element={<PmForm />}
          />
          <Route
            exact
            path={`${PREFIX_PATH}/success`}
            element={<SuccesForm />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
