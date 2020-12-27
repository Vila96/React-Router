
import React, { Component } from "react";
import {
    Link
  } from "react-router-dom";

class Nav extends Component {
    constructor (props) {
        super(props);

        this.state = {
            test: "I am a test"
        };
    }



    render() {
        return (            
                <nav>
                    <ul>
                        <li><Link to="/view1">Page 1</Link></li>
                        <li><Link to="/view2">Page 2</Link></li>
                        <li><Link to="/view3">Page 3</Link></li>
                        <li><Link to="/view4">Page 4</Link></li>
                    </ul>
                </nav>

            
        )
    }

    
}


export default Nav

