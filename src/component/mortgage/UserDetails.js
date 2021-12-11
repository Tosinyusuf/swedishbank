import React, { Component } from "react";
import "../../assets/UserDetails.css";
import Header from "../Header";

export class userDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: null,
    };
  }
  handleValidation() {
    let fields = this.props.values.fullName;

    if (!fields) {
      this.setState({ errors: "Cannot be empty" });
    }
  }
  continue = () => {};
  formSubmit = (event) => {
    event.preventDefault();
    this.props.nextQuestion();

    if (this.handleValidation()) {
      alert("Form submitted");
    }
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Header />
        <div className="page-wrapper">
          <div className="page-body">
            <div className="question">
              <h2>Question one</h2>
            </div>

            {this.state.errors}
            <div className="questionTag">kindly input yor full name</div>
            <form onSubmit={this.formSubmit}>
              <div className="input">
                <input
                  defaultValue={values.fullName}
                  onChange={handleChange("fullName")}
                  placeholder="fullname"
                  required
                />
              </div>
              <button type="submit">continue</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default userDetails;
