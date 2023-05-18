import ECS from "../../assets/ECS_01.png";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";
import discordIcon from "../../assets/discord.png";
import "./footer.css";
export function Footer() {
  return (
    <>
      <div className="footer_container">
        <div className="footer_inner_one">
          <div className="logo_container">
            <a href="/">
              <img width={110} src={ECS} />
            </a>
            <p>
              Let the e-commerce begin Expert Commerce Solutions Revolutionizing
              E-commerce industry by delivering value.
            </p>
          </div>
          <div className="quick_link_container">
            <div>
              <div style={{ fontSize: 20, fontWeight: 600 }}>
                Quick&nbsp;Links
              </div>
            </div>
            <a className="quick_link_text" href="/#home">
              Home
            </a>
            <a className="quick_link_text" href="/#sobre">
              About
            </a>
            <a className="quick_link_text" href="/#portfolio">
              Service
            </a>
            <a className="quick_link_text" href="/#contato">
              Testimonials
            </a>
            <a className="quick_link_text" href="/Packages">
              Packages
            </a>

            <a className="quick_link_text" href="/#contact">
              Contact
            </a>
          </div>
          <div className="subscribe_container">
            <div style={{ fontSize: 20, fontWeight: 600 }}>
              Subscribe to Our Newsletter
            </div>
            <div>
              Join our VIP mailing list and avail the deals, updates & more.
            </div>
            <a href="/#contact" className="sub_text">
              SubScribe
            </a>
          </div>
        </div>
        <div className="footer_inner_two">
          <div className="terms_container">
            <spam>Privacy and Policy</spam> <spam>Term of Use</spam>
          </div>
          <div className="all_right_container">
            <div>
              <div>© 2022 All Rights Reserved Expert Commerce Solutions.</div>
            </div>
          </div>
          <div className="social_handles_container">
            <a href="/" className="social_logo">
              <img width={30} src={instagramIcon} />
            </a>
            <a href="/" className="social_logo">
              <img width={30} src={discordIcon} />
            </a>
            <a href="/" className="social_logo">
              <img width={30} src={githubIcon} />
            </a>
            <a href="/" className="social_logo">
              <img width={30} src={linkedinIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// © 2022 ALL RIGHTS RESERVED EXPERT COMMERCE SOLUTIONS.
