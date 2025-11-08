import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <span className="logo-text">Lotru Labs</span>
          </Link>
          <ul className="nav-links">
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/careers" 
                className={location.pathname === '/careers' ? 'active' : ''}
              >
                Careers
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
