import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Button} from 'react-bootstrap'
import Footer from "../Footer/footer";
import { Outlet, NavLink } from "react-router-dom";
import Vegetable from "../../img/vegetables.png"

// This will require to npm install axios
import './landing.css'




export default class landing extends Component {

    render() {
        return (
            
            <body>

            <section class="home" id="home">
            <div class="home__container bd-container bd-grid">
                <div class="home__data">
                    <h1 class="home__title">Curious about food?</h1>
                    <h2 class="home__subtitle">Find out new and <br/> interesting recipes:</h2>
                    <Form className="d-flex">


      
                <NavLink to="/search">
          <Button variant="outline-success" >Search Recipes </Button>
          </NavLink>
        </Form>
                </div>

               

       
                <img src= {Vegetable} alt="" class="home__img"/>

            </div>

        </section>



        <Footer/>

    </body>




);


            
  }
}