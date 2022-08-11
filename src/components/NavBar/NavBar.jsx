import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import MyContext from '../MyContext/MyContext';
import {  FaConfluence } from 'react-icons/fa';
import './NavBar.css';
// Explicação da construção do componente 
// https://www.youtube.com/watch?v=vbj5z32LyCY&list=PLR8OzKI52ppXaPGdUUQGOGKeXSGbChIbc&index=2
// Ajustes:
// https://www.youtube.com/watch?v=LxIGXpoHmoo&list=PLR8OzKI52ppXaPGdUUQGOGKeXSGbChIbc&index=3  
// Links: https://www.youtube.com/watch?v=Vu_bTKMSpbA
function NavBar() {
  const value = useContext(MyContext);
  return (
    <div className="container-fluid p-0">
      <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <a className='navbar-brand' href='#'><FaConfluence /> Dev:T </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle="collapse"
          data-target="#navbarMainToggler"
          aria-controls='navbarMainToggler'
          aria-expanded='false'
          aria-label='Toggle Navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>


        <section className='collapse navbar-collapse' id='navbarMainToggler'>
          <div className='navbar-nav ml-auto pr-3'>
            <a className='nav-item nav-link text-white'><h5 className='p-2 text-white bg-light rounded'><Link to='/home'>Home</Link></h5></a>
            <a className='nav-item nav-link text-white' ><h5 className='p-2 text-white bg-light rounded'><Link to='/project'>Projects</Link></h5></a>
          </div>
        </section>
      </nav>
    </div>
  );
}

export default NavBar;