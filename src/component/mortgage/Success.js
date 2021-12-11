import React, { Component } from "react";
import Confirm from "../../assets/confirm.jpg";
import Header from "../Header";

export class Success extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-success">
          <div className="page-success">
            <div className="questionTag">
              You Have Successfully Submited A Request For Mortage Loan and it's
              being reviewed
            </div>
            <img src={Confirm} alt={Confirm} />
          </div>
        </div>
      </>
    );
  }
}

export default Success;
