import React from 'react'
import Proptypes from 'prop-types'


export default function Navbar(props) {
  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.modes} bg-${props.modes}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.input1}</a>
              </li>
              
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}

            <div className={`form-check form-switch text-${props.modes === 'info-subtle' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.togglemode} type="checkbox"
                id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modetext}</label>

              {/* <input type="checkbox" class="btn-check" onClick={props.togglemode} id="btn-check-outlined" autocomplete="off"/>
<label class="btn btn-outline-primary" for="btn-check-outlined">{props.modetext}</label> */}
            </div>
          </div>
        </div>
      </nav>
    
  )
}

Navbar.propTypes = {
  title: Proptypes.string.isRequired,
  input1: Proptypes.string.isRequired,
  
  mode: Proptypes.string
}