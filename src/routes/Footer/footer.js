import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Form, FormControl, Button} from 'react-bootstrap'

// This will require to npm install axios
import './footer.css'



export default class Footer extends Component {
        

    render(){
        return(
            
            <div className= "main-footer">
            <div className= "container">
            <div className= "row">
            <h1 style={{ color: "black",
                                textAlign: "center",
                            marginTop: "-50px"}}>
                                Nutrifacts
                                <br />
                            </h1>
            {/*Column 1 */}
            
            {/* <div className= "col-md-3 col-sm-4">
            <h4>Nutrifacts Information</h4>
            <ul className="list-unstyled">
                <li>123-456-789</li>
                <li>Los Angeles, CA </li>
                <li>123 Place st.</li>
            </ul>
            </div> */}
            
            {/*Column 2 */}
            
            {/* <div className= "col-md-3 col-sm-6">
            <h4>About Us</h4>
            <ul className="list-unstyled">
                <a href="/" target="_blank" rel="noopener noreferrence"> Story <br /></a>
                <a href="/" target="_blank" rel="noopener noreferrence"> Users <br/></a>
                <a href="/" target="_blank" rel="noopener noreferrence"> Information<br/></a>
            </ul>
            </div> */}
            
            {/*Column 3 */}
            
            {/* <div className= "col-md-3 col-sm-6">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
                <a href="/" target="_blank" rel="noopener noreferrence"> United States <br /></a>
                <a href="/" target="_blank" rel="noopener noreferrence"> link <br/></a>
                <a href="/" target="_blank" rel="noopener noreferrence"> Support</a>
            </ul>
            </div> */}
            
            {/*Column 4 */}
            
            {/* <div className= "col">
            <h4>Socials</h4>
            <ul className="list-unstyled">
                <a href="/" target="_blank" rel="noopener noreferrence"> Instagram <br /></a>
                <a href="/" target="_blank" rel="noopener noreferrence"> Facebook <br/></a>
                <a href="/" target="_blank" rel="noopener noreferrence"> Twitter<br/></a>
            </ul>
            </div> */}


            </div>
            
            {/* Footer Bottom */}
            
            <div className="footer-bottom">
                <p className="text-xs-cnter">
                    &copy;{new Date().getFullYear()} NutriFacts | All Rights Reserved | Terms of Service | Privacy
                </p>
            </div>
            </div>
            </div>
            

        )
    }
}