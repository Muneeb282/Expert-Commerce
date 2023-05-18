import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import esc from "../../assets/ecs-6.png";
import { NavHashLink } from "react-router-hash-link";
export function Hero() {
  const responsive = window.innerWidth > 500;
  return (
    <Container style={{ height: responsive ? "100vh" : "90vh" }} id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Let the e-commerce begin</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1 style={{ fontSize: "3vw" }}>
            Expert&nbsp;Commerce&nbsp;Solutions
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">
            Revolutionizing E-commerce industry by delivering value.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" style={{ marginTop: -130 }}>
          {/* <BrowserRouter> */}
          <NavHashLink
            smooth
            to="#contato"
            className="button"
            style={{ marginTop: 1000 }}
          >
            Contato
          </NavHashLink>
          {/* </BrowserRouter> */}
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={esc} alt="Ilustração" style={{ marginLeft: -130 }} />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
