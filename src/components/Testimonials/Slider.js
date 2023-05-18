import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ScrollAnimation from "react-animate-on-scroll";
import "./style.css";
import { Container } from "./styles";

export default class Testimonials extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
        <Container id="contato">
          <div className="project">
            <div className="bodddy">
              <h3>Testimonial</h3>
            </div>
            <Carousel
              showThumbs={true}
              showStatus={false}
              infiniteLoop
              useKeyboardArrows
              transitionTime={1000}
              width="100%"
            >
              <div className="slide-holder">
                <img
                  alt=""
                  src="https://cdn.discordapp.com/attachments/917439256459350046/945830526730788924/carletta.jpeg"
                />
                <div className="text-container">
                  <h2>Carletta Jones</h2>
                  <p>
                    Abdul, Thank you again! You and Qasim are really great. I
                    promise to recommend your agency to everyone who has
                    problems with their accounts and I will also continue to
                    collaborate with your team in the future on store
                    Management, advertising, and listing optimization.
                  </p>
                </div>
              </div>
              <div className="slide-holder">
                <img
                  alt=""
                  src="https://cdn.discordapp.com/attachments/917439256459350046/945830526261006356/munis.jpeg"
                />
                <div className="text-container">
                  <h2>Christian Muniz</h2>
                  <p>
                    ECS has been a vital partner for us as we launched our
                    Amazon business and looked to quickly ramp up sales and our
                    presence on Amazon.  The entire team was incredibly helpful
                    in achieving the desired results with our Amazon Advertising
                    campaigns and was always willing to make changes and
                    optimizations to our campaigns as we went along.  As a
                    younger brand, it was incredibly important for us to have
                    very robust content on our detail pages for customers to
                    discover and learn about our brand.  The content team was
                    fantastic in putting this together and helping us shape our
                    own narrative.
                  </p>
                </div>
              </div>
              <div className="slide-holder">
                <img
                  alt=""
                  src="https://cdn.discordapp.com/attachments/917439256459350046/945830527045369886/andrea.jpeg"
                />
                <div className="text-container">
                  <h2>Andrea P</h2>
                  <p>
                    Abdul and his team have a unique way of looking at all the
                    info Amazon generates and drawing out the key stuff that is
                    really important. Their communication has been great – they
                    took the time to get to know my business and to listen to my
                    needs.
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </Container>
      </ScrollAnimation>
    );
  }
}
