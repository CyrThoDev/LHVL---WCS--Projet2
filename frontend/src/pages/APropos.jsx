import "../sass/header.scss";
import HeaderPages from "../components/HeaderPages";
import "../sass/apropos.scss";
import Footer from "../components/Footer";
import cyrielle from "../assets/images/cyrielle.png";
import ugo from "../assets/images/ugo.png";
import quantin from "../assets/images/quantin.png";

function Apropos() {
  return (
    <div>
      <HeaderPages />
      <div className="apropos-container">
        <h2 className="apropos-title">
          {" "}
          Bienvenue sur “Les Héros de la Vente en Ligne” !
        </h2>
        <div className="content-container">
          <div className="paragraphes">
            <h3>C’est quoi le projet ?</h3>
            <p>
              Notre site est dédié à la vente de cartes de héros et méchants de
              la pop culture pour des “combats de carte” épiques. Imaginez un
              jeu de cartes où il est possible de faire affronter vos
              personnages préférés et de pouvoir les échanger afin de créer la
              meilleure équipe possible !{" "}
            </p>
            <p>
              L’objectif est de rappeler la passion que nous avions tous lorsque
              nous étions enfants, en jouant à des jeux de cartes dans la cour
              de récréation. Mais cette fois-ci, avec des personnages
              légendaires de vos séries préférées.
            </p>
            <h3> Qui sommes-nous ? </h3>
            <div className="images-groupe">
              <img src={ugo} alt="Ugo" width="200px" height="200px" />
              <img src={cyrielle} alt="Cyrielle" width="200px" height="200px" />
              <img src={quantin} alt="Quantin" width="200px" height="200px" />
            </div>
            <p>
              Notre super équipe est composée de passionnés de la pop-culture en
              commençant par Cyrielle qui est la responsable du projet, grande
              admiratrice des jeux de cartes qui veut partager sa passion avec
              tout le monde. Quantin et Ugo qui sont deux grands fans de
              super-héros, et qui ont rejoint Cyrielle dès le début du projet.{" "}
            </p>
            <p>
              Ensemble, les Héros de la Vente en Ligne ont créé ce nouveau TCG (
              trading card game ). Nous sommes fiers de vous proposer
              aujourd’hui des cartes de haute qualité avec des illustrations
              époustouflantes de vos personnages préférés ! N’attendez plus,
              rejoignez notre super-communauté pour plonger dans le monde
              passionnant de la pop-culture et pouvoir échanger vos cartes avec
              vos amis !
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Apropos;
