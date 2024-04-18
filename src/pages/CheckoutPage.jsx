import { Link } from "react-router-dom";
import "./CheckoutPage.css";

export default function CheckoutPage({ cartTotal }) {
  return (
    <div className="page-inner-content">
      <div className="section-title">
        <h3>Pagamento</h3>
        <div className="underline"></div>
      </div>

      <p className="total-purchase">
        <i>Total da compra: R$ {cartTotal},00</i>
      </p>

      {/* produtos */}

      <form className="form">
        <h2>Finalize sua compra:</h2>
        <p>Preencha todos os dados para finalizar a entrega</p>

        <div className="form-control">
          <label for="name">Nome: </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome"
            required
          />
        </div>

        <div className="form-control">
          <label for="andress">Endereço completo: </label>
          <input
            type="text"
            name="andress"
            id="andress"
            placeholder="Digite seu endereço"
            required
          />
        </div>

        <div className="form-control">
          <label for="email">E-mail: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
          />
        </div>

        <div className="form-control">
          <label for="phone">Numero de Telefone: </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Numero telefone"
            required
          />
        </div>

        <div className="form-control">
          <label for="cupom">Cupom de desconto: </label>
          <input type="text" name="cupom" id="cupom" placeholder="Cupom" />
        </div>

        <div>
          <label>Modo de Pagamento: </label>
          <select>
            <option value="pix">PIX</option>
            <option value="credito">Cartão de Credito</option>
            <option value="debito">Cartão de Debito</option>
            <option value="dinheiro">Dinheiro</option>
          </select>
        </div>

        <Link to="/completed">Finalizar pedido!</Link>
      </form>
    </div>
  );
}
