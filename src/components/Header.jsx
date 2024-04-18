import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="inner-content">
        <div className="left-side">
          <h2>
            <i>Deixe Seu Dia Mais Saboroso!</i>
          </h2>

          <p>
            Quando não souber o que comer, coma uma pizza que você ficará feliz,
            já que você não pode comprar felicidade, mas pelo menos pode comprar
            pizza que é quase a mesma coisa.
          </p>

          <div>
            <Link to="/products" className="see-more-btn">
              <span>Ver cardapio!</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>

            <Link to="/about" className="see-more-btn">
              <span>Sobre nós!</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
        </div>

        <div className="right-side">
          <img src="images/pizza-header.jpg" alt="Pizza Home" />
        </div>
      </div>
    </header>
  );
}
