import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import ECS from "../../assets/ECS_01.png";
export function Header() {
  const [isActive, setActive] = useState(false);

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <Router>
        <a href={"/"}>
          <img src={ECS} style={{ height: "60px", width: "150px" }} />
        </a>

        <nav className={isActive ? "active" : ""}>
          <a href="/#home" onClick={closeMenu} style={{ fontSize: "12px" }}>
            Home
          </a>
          <a href={"/#sobre"} onClick={closeMenu} style={{ fontSize: "12px" }}>
            About&nbsp;Us
          </a>
          <a
            href="/#portfolio"
            onClick={closeMenu}
            style={{ fontSize: "12px" }}
          >
            Services
          </a>
          <a href="/#contato" onClick={closeMenu} style={{ fontSize: "12px" }}>
            Testimonials
          </a>
          <a href="/Packages" style={{ fontSize: "12px" }}>
            Packages
          </a>
          <a
            href="/#contact"
            onClick={closeMenu}
            className="button"
            style={{ fontSize: "12px" }}
          >
            Contact
          </a>
        </nav>

        <div
          aria-expanded={isActive ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isActive ? "Fechar menu" : "Abrir menu"}
          className={isActive ? "menu active" : "menu"}
          onClick={() => {
            setActive(!isActive);
          }}
        ></div>
      </Router>
    </Container>
  );
}
