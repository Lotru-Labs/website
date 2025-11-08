import './Careers.css'

function Careers() {

  return (
    <div className="careers">
      <section className="careers-hero">
        <div className="container">
          <h1 className="careers-title">Join Our Team</h1>
          <p className="careers-subtitle">
            Help us build the future of robotics software
          </p>
        </div>
      </section>

      <section className="careers-content">
        <div className="container">
          <div className="careers-grid">
            <div className="careers-info">
              <h2>Why Lotru Labs?</h2>
              <p>
                At Lotru Labs, we're pushing the boundaries of what's possible with robotics and AI. 
                We're a small, ambitious team building technology that will power the next generation 
                of physical AI systems.
              </p>
              
              <div className="values">
                <div className="value-item">
                  <div className="value-icon">▸</div>
                  <div>
                    <h3>Innovation First</h3>
                    <p>Work on cutting-edge problems at the intersection of AI and robotics</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">▸</div>
                  <div>
                    <h3>Collaborative Culture</h3>
                    <p>Small team where every voice matters and everyone makes an impact</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">▸</div>
                  <div>
                    <h3>Continuous Learning</h3>
                    <p>Grow your skills working with the latest technologies and methodologies</p>
                  </div>
                </div>
              </div>

              <div className="careers-note">
                <p>
                  <strong>Note:</strong> We're currently in stealth mode and not actively hiring for specific roles. 
                  However, we're always interested in connecting with talented individuals who are passionate 
                  about robotics and AI. Reach out to us, and we'll keep you in mind for future opportunities.
                </p>
              </div>
            </div>

            <div className="careers-form-container">
              <h2>Get in Touch</h2>
              <p>Interested in joining Lotru Labs? Send us an email to introduce yourself.</p>

              <div className="contact-actions">
                <a 
                  href="mailto:careers@lotrulabs.com?subject=Career Inquiry&body=Hi, I'm interested in joining Lotru Labs.%0D%0A%0D%0AName: %0D%0AEmail: %0D%0A%0D%0AAbout me:%0D%0A"
                  className="btn btn-primary btn-full"
                >
                  Email Us About Careers
                </a>
                <p className="contact-info">
                  Or reach us directly at <a href="mailto:careers@lotrulabs.com" className="email-link">careers@lotrulabs.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers
