import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import amz from "../../assets/amz.svg";
import ebay from "../../assets/ebay.png";
import shopify from "../../assets/shopify.png";
import ecs from "../../assets/ecs-5.png";
import "./style.css";

export function About() {
  return (
    <>
      <div
        id="about"
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 35,
          fontWeight: 500,
        }}
      >
        <div>About Us</div>
      </div>

      <Container id="sobre">
        <div className="about-text">
          <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
            <p className="about_para">
              We provide individuals and companies complete solutions for their
              e-Commerce needs. We deliver consultation to sellers of Amazon
              Private labels, Wholesalers and Dropshippers to find profitable
              products and selling models. We’re professional Amazon e-commerce
              sellers ourselves with over 08 years of experience. We have
              developed sourcing skills beyond an average person through an
              analytical approach overlaid with some creative thinking. Well,
              guess what, should you decide to work with us, all the knowledge
              mentioned above and our skills mentioned below are yours! Imagine
              going through them yourself.
            </p>
          </ScrollAnimation>

          <div className="hard-skills">
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
                <img src={amz} alt="React" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
                <img src={shopify} alt="Vue" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
                <img src={ebay} alt="JavaScript" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
                <img src={amz} alt="Html" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
                <img src={shopify} alt="Css" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
                <img src={ebay} alt="Node" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
                <img src={amz} alt="Typescript" />
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="about-image">
          <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
            <img src={ecs} alt="Imagem de perfil" />
          </ScrollAnimation>
        </div>
      </Container>
    </>
  );
}
