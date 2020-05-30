import React from 'react';
import logo from '../assets/moyyn-6-1.png';
import '../assets/css/header.css';

function HeaderComponent(){
    return(
        <nav class="navbar navbar-light navbar-expand-lg static-top header_links">
            <div class="container">
                    <img src={logo} class="pull-left logo " alt="logo" />
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">

                                <li class="nav-item">
                                <a class="nav-link header_links "  href="#"  >Home
                                        <span class="header_links sr-only">(current)</span>
                                    </a>
                                </li>

                                <li class="nav-item">
                                <a class=" nav-link" href="#">About</a>
                                </li>

                                <li class="nav-item">
                                <a class="header_links nav-link" href="#">Services</a>
                                </li>

                                <li class="nav-item">
                                <a class="header_links nav-link" href="#">Contact</a>
                                </li>
                            </ul>

                    </div>
            </div>
       </nav>

    )
}

export default HeaderComponent