import React, { createContext, useState } from "react";
import Images from "./components/Images";
import Jumbotron from "./components/Jumbotron";
import SearchField from "./components/SearchField";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Jumbotron>
        <SearchField />
      </Jumbotron>
      <Images />
      <Footer />
    </div>
  );
};
export default App;
