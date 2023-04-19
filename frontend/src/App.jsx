import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// US 1 import

// US 2 Import

// US 3 import
import Footer from "@components/Footer";
import Contact from "@pages/Contact";
// import AllCards from "./pages/AllCards";
// US 4 import

import "./App.css";
import "./sass/style.scss";

function App() {
  return (
    <Router>
      <header>{/** US 1 Page */}Logo + image + menu + about</header>
      {/* <main>
        <div className="carrousel">Carrousel</div>
        <div className="all-ctg">Catégories principales DC Comics & Marvel</div>
        <div className="btn-ctg">Boutons Catégories</div>
      </main> */}
      {/** US 2 Page */}
      {/* <AllCards /> */}
      {/** US 3 Page */}
      {/** US 4 Page */}
      {/* Add your routes here  */}
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {/* Copyright et formulaire */}
    </Router>
  );
}

export default App;
