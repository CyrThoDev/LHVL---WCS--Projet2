// US 1 import
// import SuperCard from "./pages/SuperCard";
// US 2 Import
// import AllCards from "./pages/AllCards";
// US 3 import

// US 4 import

import "./App.css";
import "./sass/style.scss";
// import SuperHeroes from "./assets/data/data"

function App() {
  return (
    <div>
      <header>{/** US 1 Page */}Logo + image + menu + about</header>
      {/* <AllCards superheroes={SuperHeroes}/> */}
      <main>
        <div className="carrousel">Carrousel</div>
        <div className="all-ctg">Catégories principales DC Comics & Marvel</div>
        <div className="btn-ctg">Boutons Catégories</div>
      </main>
      <footer>
        {/** US 3 Page */}
        <p>Les héros de la vente en ligne</p>
        <p>Contact</p>
        {/* Copyright et formulaire */}
      </footer>
      {/** US 4 Page */}
    </div>
  );
}

export default App;
