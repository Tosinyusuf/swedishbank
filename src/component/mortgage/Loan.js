import React, { Component } from "react";
import "../../assets/UserDetails.css";
import Header from "../Header";

export class Loan extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  formSubmit(event) {
    event.preventDefault();
    this.props.answer(this.state.selectedOption);
  }
  back = (e) => {
    this.props.previousQuestion();
  };
  render() {
  
    return (
      <>
        <Header />
        <div className="page-wrapper">
          <div className="page-body">
            <div className="question">
              <h2>Question three</h2>
            </div>
            <div className="questionTag">
              Are you a new customer or returning customer
            </div>
            <form onSubmit={this.formSubmit}>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="Returning"
                    checked={this.state.selectedOption === "Returning"}
                    onChange={this.onValueChange}
                  />
                  Returning Customer
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="New"
                    checked={this.state.selectedOption === "New"}
                    onChange={this.onValueChange}
                  />
                  New Customer
                </label>
              </div>
              <button className="back" onClick={this.back}>
                back
              </button>{" "}
              {""}
              <button className="btn btn-default" type="submit">
                continue
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Loan;
