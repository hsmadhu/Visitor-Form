import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faLandmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Header() {
 return (
   <div className="header-main">
     
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
         <a className="navbar-brand" href="/"><FontAwesomeIcon icon={faLandmark} className="w-125 h-125" style= {{color: "white" }} /> </a>
      
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style= {{color: "white" }} />         
        </button>
         
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto  mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">Home</Link>
            </li>
            
             <li className="nav-item">
              <Link to="/visitor"  className="nav-link" aria-current="page">Visitor Form</Link>
            </li>
            
             <li className="nav-item">
              <Link to="/latestnews" className="nav-link" aria-current="page">Latest News</Link>
             </li>
             
            
           </ul>
           
         </div>
         
      </div>
     </nav>
     
    </div>
   
      )
}

export default Header
