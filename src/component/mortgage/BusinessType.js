import React, { Component } from "react";
import "../../assets/UserDetails.css";
import Header from "../Header";

export class BusinessType extends Component {
  formSubmit = (event) => {
    event.preventDefault();
    this.props.nextQuestion();
  };
  back = () => {
    this.props.previousQuestion();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Header />
        <div className="page-wrapper">
          <div className="page-body">
            <div className="question">
              <h2>Question two</h2>
            </div>
            <div className="questionTag">what businessType are you into</div>
            <form onSubmit={this.formSubmit}>
              <div className="input">
                <input
                  defaultValue={values.businessType}
                  onChange={handleChange("businessType")}
                  placeholder="eg banker"
                  required
                />
              </div>
              {""}
              <button className="back" onClick={this.back}>
                back
              </button>{" "}
              {""} <button type="submit">continue</button>{" "}
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default BusinessType;
