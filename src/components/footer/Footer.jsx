import Button from "../button/Button";
import "./footer.css";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="newsletter">
        <div className="newsletter-text col-6">
          <h2 className="newsletter-title">RETRIEVE THE LATEST NEWS</h2>
          <div className="newsletter-subtext">
            Sign up today to receive the latest news, tips and tricks, updates,
            behind-the-scenes content, exclusive offers, and more (including
            other gameArena news, products, events, and promotions) by email.
          </div>
        </div>

        <div className="col-6">
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input id="email" type="text" required placeholder="Email"></input>
            <Button>Sign Up</Button>
          </form>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-navigation-section">
          <span>FAQ</span>
          <span>Terms & Conditions</span>
          <span>Help Center</span>
        </div>

        <div className="footer-navigation-section">
          <span>Legal & Privacy</span>
          <span>Online Service Updates</span>
          <span>User Agreement</span>
          <span>Cookie Preferences</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
