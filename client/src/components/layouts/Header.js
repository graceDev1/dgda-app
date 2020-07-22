import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
    return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link className="navbar-brand" to="/">DGDA</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse float-right" id="navbarCollapse">
          <ul className="navbar-nav mr-auto float-right">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Acceuil <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/forum">Reglement</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reglement">Forum</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    )
}

export default Header
