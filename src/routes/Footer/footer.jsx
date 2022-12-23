import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'



export default class Footer extends Component {
        

    render(){
        return(
            <section class="home" id="home">            
            <div className= "main-footer">
            <div className= "container">
            <div className= "row">
            <h1 style={{ color: "black",   
                                textAlign: "center",
                            marginTop: "10px", fontSize: "30px"}}>
                                Nutrifacts
                                <br />
                            </h1>
           

            </div>
            
            {/* Footer Bottom */}
            
            <div className="footer-bottom">
                <p className="text-xs-cnter" style={{ fontSize: "20px"}}>
                    &copy;{new Date().getFullYear()} NutriFacts | All Rights Reserved | Terms of Service | Privacy
                </p>
            </div>
            </div>
            </div>
            </section>


        )
    }
}