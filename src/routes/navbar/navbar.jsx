import React from "react";
import './navbar.css'
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { Outlet, NavLink } from "react-router-dom";

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */



/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
 
// Here, we display our Navbar
const Navbar = () => {
  return (
    <section class="home" id="home">
<header class="header" id="header">
<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
            <div class="nav container ">
                <a href="#/" class="nav__logo">Nutrifacts</a>

                <div class="nav__menu show-menu" id="nav-menu">
                    <ul class="nav__list grid">
                        <li class="nav__item">
                            <NavLink to="/" className="nav__link" activeClassName="active-link">
                                <i class="uil uil-home nav__icon"></i> Home
                            </NavLink>

                        </li>
                        <li class="nav__item">
                            <NavLink to="/mealPlanner" className="nav__link" activeClassName="active-link">
                                <i class="uil uil-calendar-alt nav__icon"></i> Meal Planner
                            </NavLink>
                            
                        </li>
                        <li class="nav__item">
                            <NavLink to="/search" className="nav__link" activeClassName="active-link">
                            <i class="uil uil-search"></i> Search Page
                            </NavLink>
                            
                        </li>
                      

                    </ul>
                </div>

                {/* <div class="nav__btns">
                  



                    <div class="nav__toggle" id="nav-toggle">
                        <i class="uil uil-apps"></i>
                    </div>
                </div> */}
            </div>
            <Outlet />
        </header>
        </section>
  );
};
 
export default Navbar;