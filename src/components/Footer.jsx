import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="logo-footer">
          <h1 className="logo">
            VINI<span>PIZZA</span>
          </h1>

          <p>
            Não existe amor mais verdadeiro do que aquele entre uma pessoa e uma
            pizza.
          </p>
        </div>

        <div className="links-footer">
          <h3>Links Uteis</h3>

          <ul>
            <li>Cupons</li>
            <li>Blog</li>
            <li>Politicas</li>
          </ul>
        </div>
      </div>

      <div className="social">
        <a
          href="https://www.linkedin.com/in/vinicius-fontes-b7a83a266/"
          title="linkedin"
          target="_blank"
        >
          <i class="bi bi-linkedin"></i>
        </a>

        <a
          href="https://github.com/ViniciusFontes-02"
          title="github"
          target="_blank"
        >
          <i class="bi bi-github"></i>
        </a>
      </div>

      <hr />

      <div class="copyright">
        <p>Copyright 2024 - Vinicius Fontes - Todos os Direitos Reservados.</p>
      </div>
    </footer>
  );
}
