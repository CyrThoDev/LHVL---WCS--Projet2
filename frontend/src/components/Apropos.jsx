import { Link } from "react-router-dom";
import "../sass/header.scss";

function Apropos() {
  return (
    <div>
      <Link to="/apropos" className="about">
        À PROPOS
      </Link>
    </div>
  );
}

export default Apropos;

