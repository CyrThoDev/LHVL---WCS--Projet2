import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllCardsDisplay from "./pages/AllCardsDisplay";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Panier from "./pages/Panier";
import AllCategories from "./pages/AllCategories";

import "./App.css";
import "./sass/style.scss";

function App() {
  const [basket, setBasket] = useState([1, 3, 5]);

  const handleBasket = () => {
    setBasket([]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllCardsDisplay />} />
        <Route path="/categories" element={<AllCategories />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/panier"
          element={<Panier handleBasket={handleBasket} basket={basket} />}
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
