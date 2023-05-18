import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { FormComponent } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Entre em contato comigo</h2>
        <p>
          Se você viu o meu potencial ou quer conversar comigo, não exite em me
          mandar uma mensagem.
        </p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:solutions@expertcommercesolutions.com">
            solutions@expertcommercesolutions.com
          </a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+92 333 3810066">+92 333 3810066</a>
        </div>
      </div>
      <FormComponent />
    </Container>
  );
}
