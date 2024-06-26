import React from 'react'
import {Link} from 'react-router-dom'
function Menu() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">News</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span classname="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
                </li>
                
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Menu