import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import AboutNelson from "./pages/about-nelson/AboutNelson";
import Activation from "./pages/activation/Activation";
import Care from "./pages/care/Care";
import Checklist from "./pages/checklist/Checklist";
import GlobalCSS from "./styling/globalStyles.css";

const App = () => {
  return (
    <>
      <GlobalCSS />
      <Header />
      <Routes>
        <Route path="/" element={<AboutNelson />} />
        <Route path="/activation" element={<Activation />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/care" element={<Care />} />
      </Routes>
    </>
  );
};

export default App;
