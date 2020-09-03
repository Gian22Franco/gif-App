import React from 'react';
import logo from '../logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars,faTimes} from '@fortawesome/free-solid-svg-icons'
// import {faBars,faTimes} from '@fortawesome/free-brands-svg-icons'

export const AddHeader = () => {
    return (
        <>


            <header>
                <div className="container">
                    <nav className="nav">
                        <div className="menu-toggle">
                            <FontAwesomeIcon icon={faBars}/>
                            <FontAwesomeIcon icon ={faTimes}/>
                        </div>

                        <a href="index.html" className=" "><img className="logo" src={logo} alt="LOGO"></img></a>

                        <ul className="nav-list">
                            {/* <li className="nav-item">
                                <a href="index.html" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link">About</a>
                            </li> */}
                            <li className="nav-item">
                                <a href="#contacto" className="nav-link">Contacto</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

        </>
    )
}
