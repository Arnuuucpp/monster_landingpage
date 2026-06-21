const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Brand column */}
        <div className="footer-col footer-brand">
          <h3 className="footer-logo">MONSTER</h3>
          <p className="footer-tagline">
            Fuel your grind. Unleash the beast.
          </p>
        </div>

        {/* Products column */}
        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li><a href="#">Original Line</a></li>
            <li><a href="#">Ultra Zero Sugar</a></li>
            <li><a href="#">Juice Monster</a></li>
            <li><a href="#">Rehab</a></li>
          </ul>
        </div>

        {/* Company column */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Athletes</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Socials column */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Instagram ↗</a></li>
            <li><a href="#">Facebook ↗</a></li>
            <li><a href="#">X ↗</a></li>
            <li><a href="#">YouTube ↗</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Monster Energy. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer