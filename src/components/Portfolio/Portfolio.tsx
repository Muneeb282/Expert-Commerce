import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { BrowserRouter as Router,  Link,  } from "react-router-dom";

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>Services</h2>

      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header></header>
            <div className="body">
              <h3>Amazon FBA Wholesale</h3>
              <p>
                A-Z of FBA wholesale process that starts with Product Research,
                Product Sourcing, Brand approvals and then moving onwards to the
                Management of seller central accounts, Inventory Management &
                Reporting.
              </p>
            </div>
            <footer>
              <Link to={"/Amazon_FBA_Wholesale"}>
                <button className="bttn">Read More</button>
              </Link>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header></header>
            <div className="body">
              <h3>Amazon PL</h3>
              <p>
                Our Amazon private label services team ensures that products are
                future focused and can earn long term profits for our clients.
                Our team invests a lot of time on the research process with
                latest tools before finalizing a product.
              </p>
            </div>
            <footer>
              <Link to={"/Amazon_PL"}>
                <button className="bttn">Read More</button>
              </Link>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header></header>
            <div className="body">
              <h3>Amazon/Ebay/Wallmart Dropshipping</h3>
              <p>
                Dropshipping is an e-commerce method in which the seller takes
                orders on behalf of a manufacturer, distributor, or supplier.
              </p>
            </div>
            <footer>
              <Link to={"/Dropshipping"}>
                <button className="bttn">Read More</button>
              </Link>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header></header>
            <div className="body">
              <h3>Store Management</h3>
              <p>
                As a part of our Amazon store management services, we can offer
                the basic seller profile information such as the logo, bank
                account details, business information, credit card information,
                return policies, and so much more.
              </p>
            </div>
            <footer>
              <Link to={"/Store_Management"}>
                <button className="bttn">Read More</button>
              </Link>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header></header>
            <div className="body">
              <h3>Product Research</h3>
              <p>
                Choosing the right product is what makes the difference. Finding
                a product with high demand and low competition typically takes
                tones of patience, hours of research, and years of experience as
                to what customers like to buy.
              </p>
            </div>
            <footer>
              <Link to={"/Product_Research"}>
                <button className="bttn">Read More</button>
              </Link>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header></header>
            <div className="body">
              <h3>Marketing & Brand Strategy Development</h3>
              <p>
                If you are wondering how to sell on Amazon successfully, a
                well-developed Amazon marketing strategy is a necessity
              </p>
            </div>
            <footer>
              <Link to={"/Marketing"}>
                <button className="bttn">Read More</button>
              </Link>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
