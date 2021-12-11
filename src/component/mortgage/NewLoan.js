import React, { Component } from "react";
import "../../assets/UserDetails.css";
import Header from "../Header";

export class NewLoan extends Component {
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
    this.props.NewLoanAnswer(this.state.selectedOption);
  }
  continue = () => {
    this.props.nextQuestion();
  };
  back = () => {
    this.props.previousNewQuestion();
  };
  render() {
    // const { values, handleChange } = this.props
    return (
      <>
        <Header />
        <div className="page-wrapper">
          <div className="page-body">
            <div className="question">
              <h2>Question four</h2>
            </div>
            <div className="questionTag">
              {" "}
              For new customers. please select{" "}
            </div>
            <form onSubmit={this.formSubmit}>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="100,000-500,000"
                    checked={this.state.selectedOption === "100,000-500,000"}
                    onChange={this.onValueChange}
                  />
                  100,000-500,000
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

export default NewLoan;
