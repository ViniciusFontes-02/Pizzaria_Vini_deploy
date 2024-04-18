import { Link } from "react-router-dom";
import "./AboutPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  return (
    <div className="page-inner-content">
      <div className="section-title">
        <h3>Um Pouco da Nossa História</h3>
        <div className="underline"></div>
      </div>

      <div className="main-content">
        <div className="text-house">
          <img
            src="../../images/pizzaria-casa.jpeg"
            alt="pizzaria"
            className="house"
          />
          <p>
            Um dia em uma pequena rua, escondida entre os prédios altos e o
            movimento frenético da cidade. No coração dessa rua, onde as luzes
            da cidade mal alcançavam, havia um antigo prédio abandonado, com
            janelas quebradas e portas enferrujadas. Por anos, esse lugar
            permaneceu desolado, esquecido pelo tempo.
          </p>

          <p>
            No entanto, um dia, algo mágico aconteceu. Um jovem chamado
            Vinicius, com uma paixão ardente por pizza e um sonho ainda maior,
            cruzou o caminho desse antigo prédio. Ao olhar para aquelas paredes
            desgastadas pelo tempo, Vinicius enxergou além da decadência. Ele
            viu potencial, viu uma oportunidade de criar algo especial.
          </p>

          <p>
            Vini começou a trabalhar incansavelmente. Ele trouxe uma equipe de
            artesãos para restaurar o prédio, trazendo de volta sua antiga
            glória. Cada janela quebrada foi substituída, cada parede pintada
            com amor e cada detalhe cuidadosamente restaurado. Enquanto isso,
            Vini passava horas na cozinha, aperfeiçoando suas receitas de pizza,
            experimentando novos sabores e ingredientes.
          </p>

          <p>
            Quando finalmente o prédio estava pronto, era como se um novo
            capítulo estivesse sendo escrito naquela rua esquecida. Vini batizou
            o lugar de "Pizzaria Vini" e abriu suas portas para o mundo. As
            pessoas da cidade, curiosas com a transformação daquele antigo
            lugar, começaram a aparecer aos poucos.
          </p>

          <p>
            A palavra se espalhou rapidamente sobre as pizzas deliciosas e o
            ambiente acolhedor da Pizzaria Vini. Logo, as mesas estavam sempre
            cheias, as risadas ecoavam pelas paredes e o aroma irresistível de
            pizza fresca enchia o ar.
          </p>

          <p>
            Mas o sucesso da Pizzaria Vini não veio apenas das pizzas saborosas.
            Vini tinha um toque especial para criar experiências memoráveis. Ele
            organizava noites temáticas, como noites de karaokê ou degustações
            de vinhos, que sempre atraíam uma multidão animada.
          </p>

          <p>
            Com o tempo, a Pizzaria Vini se tornou mais do que apenas um lugar
            para comer. Era um ponto de encontro para amigos e familiares, um
            refúgio para os amantes de pizza e um símbolo de renovação e
            esperança para a comunidade.
          </p>

          <p>
            E assim, a história da Pizzaria Vini foi escrita, uma história de
            visão, trabalho árduo e a crença de que até mesmo os lugares mais
            desgastados podem se transformar em algo bonito e significativo com
            um pouco de amor e dedicação.
          </p>

          <Link to="/location" className="see-more-btn">
            Nossa Localização
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </div>
    </div>
  );
}
