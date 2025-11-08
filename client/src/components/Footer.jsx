import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Lotru Labs</h3>
            <p className="footer-tagline">
              Building robotics software for the future of physical AI
            </p>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <p className="footer-contact">
              Interested in learning more?<br />
               Email us at <a href="mailto:hello@lotrulabs.com" className="email-link">hello@lotrulabs.com</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Lotru Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
