import React, { Component } from "react";
import "../../assets/UserDetails.css";
import Header from "../Header";

export class ReturningLoan extends Component {
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
    this.props.ReturningLoanAnswer(this.state.selectedOption);
  }
  continue = () => {
    this.props.nextQuestion();
  };
  back = () => {
    this.props.previousQuestion();
  };
  render() {
    const {
      values: { fullName },
    } = this.props;
    return (
      <>
        <Header />
        <div className="page-wrapper">
          <div className="page-body">
            <div className="question">
              <h2>Question four</h2>
            </div>
            <div className="questionTag">
              Welcome back {fullName}, Our returning customer has luxury to a
              wider loan. please select yours
            </div>
            <form onSubmit={this.formSubmit}>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="100,000-300,000"
                    checked={this.state.selectedOption === "100,000-300,000"}
                    onChange={this.onValueChange}
                  />
                  100,000-300,000
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="300,000-600,000"
                    checked={this.state.selectedOption === "300,000-600,000"}
                    onChange={this.onValueChange}
                  />
                  300,000-600,000
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="600,000-1,000,000"
                    checked={this.state.selectedOption === "600,000-1,000,000"}
                    onChange={this.onValueChange}
                  />
                  600,000-1,000,000
                </label>
              </div>
              <button className="back" onClick={this.back}>
                back
              </button>{" "}
              {""}
              <button className="btn btn-default" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default ReturningLoan;
