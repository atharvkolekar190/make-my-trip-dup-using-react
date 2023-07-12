import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div class="container">
                    <a href="#" class="navbar-brand">
                        <img src={require('../assets/images/Make-My-Trip-Logo-PNG.png')} alt="" width="200" height="70"/>  (dup)
                        
                            
                    </a>
                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapsenavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div id="collapsenavbar" class="collapse navbar-collapse justify-content-end">
                        <ul class="navbar-nav">
                            <Link to={'/'} class="nav-item btn btn-outline-danger" style={{marginRight: "30px"}}><a 
                                class="nav-link">Home</a></Link>
                            <Link to={'/service'} class="nav-item btn btn-outline-danger" style={{marginRight: "30px"}}><a 
                                class="nav-link">Services</a></Link>
                            <Link to={'/location'}  class="nav-item btn btn-outline-danger" style={{marginRight: "30px"}}><a 
                                class="nav-link">Locations</a></Link>
                            <Link to={'/contactus'}  class="nav-item btn btn-outline-danger" style={{marginRight: "30px"}}><a 
                                class="nav-link">Contact </a></Link>
                        </ul>
                    </div>

                </div>
            </nav>

        </>
    )
}
