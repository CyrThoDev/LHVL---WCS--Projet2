import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllCardsDisplay from "./pages/AllCardsDisplay";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Panier from "./pages/Panier";
import AllCategories from "./pages/AllCategories";
import APropos from "./pages/Apropos";

import "./App.css";
import "./sass/style.scss";

function App() {
  const [basket, setBasket] = useState([
    { id: 1, value: 1 },
    { id: 3, value: 3 },
    { id: 5, value: 4 },
  ]);

  const handleBasket = (heroe, value) => {
    if (value > 0) {
      const newBasket = [...basket];
      const index = newBasket.indexOf(heroe);
      newBasket[index].value = value;
      setBasket(newBasket);
    } else {
      setBasket(basket.filter((el) => el.id !== heroe.id));
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllCardsDisplay />} />
        <Route path="/apropos" element={<APropos />} />
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
