import React, { Component } from "react";
import "../../assets/UserDetails.css";
import Header from "../Header";

export class Confirm extends Component {
  continue = (e) => {
    this.props.nextQuestion();
  };
  back = (e) => {
    this.props.previousComfirmQuestion();
  };
  render() {
    const {
      values: { fullName, businessType, returningLoan,loan },
    } = this.props;
    return (
      <>
        <Header />
        <div className="page-wrapper">
          <div className="page-body">
            <div className="question">
              <h2>Comfirmation</h2>
            </div>
            <div className="questionTag">kindly input yor full name</div>
            <p>Answer : {fullName}</p>
            <div className="questionTag">what businessType are you into</div>
            <p>Answer : {businessType}</p>
            <div className="questionTag">
              Are you a new customer or returning customer
            </div>
            <p>Answer : {loan}</p>
            {!returningLoan ? (
              <div className="questionTag">
                For new customers. please select{<br></br>}Answer :{" "}
                {this.props.values.newLoan}
              </div>
            ) : (
              <div className="questionTag">
                Welcome back {fullName}, Our returning customer has luxury to a
                wider loan. please select yours{<br></br>}Answer :{" "}
                {this.props.values.returningLoan}
              </div>
            )}
            <button className="back" onClick={this.back}>
              back
            </button>{" "}
            {""}
            <button onClick={this.continue}>Submit</button>
          </div>
        </div>
      </>
    );
  }
}

export default Confirm;
