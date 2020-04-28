import React, {useState} from 'react'
import { Link, useLocation as location } from 'react-router-dom'
import { Button } from '../Forms'
import { Collapse } from '../Grid'

export default function navBar() {

    let [navLinks, showNavLinks] = useState(false)

    const toggleNav = () => showNavLinks(navLinks = !navLinks)

    const { pathname } = location();

    return (
        <nav className={'navbar navbar-expand-lg navbar-light bg-light'}>
            <Link to='/' className={'navbar-brand'}>Google Books</Link>
            <button onClick={toggleNav} className={'navbar-toggler'} type="button" data-toggle="collapse" data-target="#target-collapse" >
            <span className="navbar-toggler-icon"></span>
            </button>
                

            <Collapse navState={navLinks} id={'target-collapse'}>
              <ul className="navbar-nav mr-auto">
                <li className={pathname === "/" ? "nav-item active" : "nav-item"}>
                    <Link to="/" className={'nav-link'}>
                        Search
                    </Link>    
                </li>
                <li className={pathname === "/save" ? "nav-item active" : "nav-item"}>
                    <Link to="/save" className={'nav-link'}>
                        Saved
                    </Link>    
                </li>
              </ul>
            </Collapse>
        </nav>
    )
}


// import React from "react";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import { Redirect } from 'react-router-dom';
// // import { Navbar, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';

// function Nav() {

//   return (

//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="/">Google Book Search</a>
//       {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button> */}

//       {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
//       <br></br>
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <a className="nav-link" href="/search">Search<span className="sr-only">(current)</span></a>
//           </li>
//           <li className="nav-item active">
//             <a className="nav-link" href="/save">Saved</a>
//           </li>
//         </ul>
//       {/* </div> */}
//     </nav>
//   );
// }

// export default Nav;
