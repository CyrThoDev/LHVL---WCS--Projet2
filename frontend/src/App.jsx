import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Contact from "./pages/Contact";

import "./App.css";
import "./sass/style.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
