import "./Footer.css";
import FooterLogo from "../../assets/images1/logo-light.png";
const Footer = () => {
  return (
    <div className="footer">
      <section className="section-a">
        <div className="container flex">
          <div className="col">
            <p>Do you have Questions?</p>
            <span>We'll help you to grow your career and growth.</span>
          </div>
          <div className="col">
            <button className="custom-btn">Contact Us</button>
          </div>
        </div>
      </section>
      <section className="section-b">
        <div className="container">
          <div className="row flex">
            <div className="col">
              <div className="footer-logo">
                <img src={FooterLogo} alt="" />
              </div>
              <p className="footer-title">Do You Need Help With Anything?</p>
              <p className="description">
                Receive updates, hot deals, tutorials, discounts sent straignt
                in your inbox every month
              </p>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email.."
                />
                <button className="custom-btn">SUBSCRIBE</button>
              </div>
            </div>
            <div className="row flex">
              <div className="col">
                <p className="footer-title">LAYOUTS</p>
                <ul className="footer-ul">
                  <li>Home Page</li>
                  <li>About Page</li>
                  <li>Service Page</li>
                  <li>Property Page</li>
                  <li>Contact Page</li>
                  <li>Single Blog</li>
                </ul>
              </div>
              <div className="col">
                <p className="footer-title">ALL SECTIONS</p>
                <ul className="footer-ul">
                  <li>Headers</li>
                  <li>Features</li>
                  <li>Attractive</li>
                  <li>Testimonials</li>
                  <li>Videos</li>
                  <li>Footers</li>
                </ul>
              </div>
              <div className="col">
                <p className="footer-title">COMPANY</p>
                <ul className="footer-ul">
                  <li>About Page</li>
                  <li>Blog</li>
                  <li>Pricing</li>
                  <li>Affiliate</li>
                  <li>Login</li>
                  <li>Changelog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
