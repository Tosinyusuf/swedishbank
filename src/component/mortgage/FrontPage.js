import React, { Component } from 'react';
import Header from "../Header";
import "../../assets/FrontPage.css";

export class FrontPage extends Component {
    continue = () => {
        this.props.nextQuestion();
    }
    render() { 
   
        return (
            <>
                <Header />
                <div className="page-wrapper">
            <div className="page-body">
                    <h2>Please go through the application carefully </h2>
                    <p>note: There are 4 steps to be completed and all fields are required</p>

                    <p>After submition your application will be reviewed successfully</p>
                <button onClick={this.continue}>Begin</button>
                </div></div>
            </>
        )
    }
}

export default FrontPage
