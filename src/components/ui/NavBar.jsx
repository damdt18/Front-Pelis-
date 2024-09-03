import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link
          to='/'
          className="navbar-brand">
          IUDIGITAL
        </Link>

        <a className="navbar-brand" href="#">
          <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24" />

        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink
              to='/Directores'
              className="nav-link"
            >
              Directores
            </NavLink>

            <NavLink
              to='/Productoras'
              className="nav-link"
            >
              Productoras
            </NavLink>

            <NavLink
              to='/'
              className="nav-link"
            >
              Generos
            </NavLink>

            <NavLink
              to='/tipos'
              className="nav-link"
            >
              Tipos
            </NavLink>

            <NavLink
              to='/series-peliculas'
              className="nav-link "
            >
              Series y peliculas
            </NavLink>




    



          </ul>
        </div>
      </div>
    </nav>




  )
}
