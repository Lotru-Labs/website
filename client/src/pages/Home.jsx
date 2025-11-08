import './Home.css'
import { Cable, Zap, Layers, Mail } from 'lucide-react'

function Home() {

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Empowering Physical AI with <span className="highlight">Seamless Hardware Integration</span>
            </h1>
            <p className="hero-subtitle">
              Lotru Labs develops cutting-edge robotics software that bridges the gap between AI and hardware, 
              making it easier for physical AI companies to connect, control, and scale.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Cable size={32} />
              </div>
              <h3>Hardware Connectivity</h3>
              <p>Streamlined integration between AI systems and robotics hardware, reducing complexity and time to deployment.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={32} />
              </div>
              <h3>Real-Time Control</h3>
              <p>Low-latency communication protocols enabling precise, real-time control of physical AI systems.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Layers size={32} />
              </div>
              <h3>Scalable Solutions</h3>
              <p>Infrastructure designed to grow with your needs, from prototype to production deployment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="investors-section">
        <div className="container">
          <div className="investors-card">
            <div className="investors-icon">
              <Mail size={40} />
            </div>
            <h2>Let's Connect!</h2>
            <p>
              Whether you're interested in our products, investment opportunities, or potential partnerships, 
              we'd love to hear from you. Be the first to know when we launch and learn more about 
              Lotru Labs' vision for the future of robotics and physical AI technology.
            </p>
            <div className="contact-actions">
              <a 
                href="mailto:hello@lotrulabs.com?subject=Interest in Lotru Labs&body=Hi, I'd like to learn more about Lotru Labs."
                className="btn btn-primary btn-large"
              >
                Get in Touch
              </a>
              <p className="contact-info">
                Email us at <a href="mailto:hello@lotrulabs.com" className="email-link">hello@lotrulabs.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
