import React, { Component } from "react";
import UserDetails from "./UserDetails";
import Loan from "./Loan";
import BusinessType from "./BusinessType";
import ReturningLoan from "./ReturningLoan";
import NewLoan from "./NewLoan";
import FrontPage from "./FrontPage";
import Comfirm from "./Comfirmation";
import Success from "./Success";

export class MortgageFoam extends Component {
  state = {
    step: 1,
    fullName: "",
    businessType: "",
    returningLoan: "",
    newLoan: "",
    loan: "",
  };

  //proceed to next question
  nextQuestion = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //go back to previos question
  previousQuestion = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  previousNewQuestion = () => {
    const { step } = this.state;
    this.setState({
      step: step - 2,
    });
  };
  previousComfirmQuestion = () => {
    const { step, returningLoan} = this.state;
    if (returningLoan === "") {
      this.setState({
        step: step - 1,
      });
    } else {
      this.setState({
        step: step - 2,
      });
    }
  };
  answer = (tit) => {
    console.log(tit);
    const { step } = this.state;
    switch (tit) {
      case "Returning":
        this.setState({
          loan: "Returning",
        });
        this.setState({
          step: step + 1,
        });
        break;
      case "New":
        this.setState({
          loan: "New",
        });
        this.setState({
          step: 6,
        });
        break;
      default:
        <h2>cfg</h2>;
        break;
    }
  };
  ReturningLoanAnswer = (tit) => {
    console.log(tit);
    switch (tit) {
      case "100,000-300,000":
        this.setState({
          returningLoan: "100,000-300,000",
        });
        this.setState({
          step: 7,
        });
        break;
      case "300,000-600,000":
        this.setState({
          returningLoan: "300,000-600,000",
        });
        this.setState({
          step: 7,
        });
        break;
      case "600,000-1,000,000":
        this.setState({
          returningLoan: "600,000-1,000,000",
        });
        this.setState({
          step: 7,
        });
        break;
      default:
        <h2>cfg</h2>;
        break;
    }
  };
  NewLoanAnswer = (tit) => {
    console.log(tit);
    switch (tit) {
      case "100,000-500,000":
        this.setState({
          newLoan: "100,000-500,000",
        });
        this.setState({
          step: 7,
        });
        break;
      default:
        <h2>cfg</h2>;
        break;
    }
  };
  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    const { step } = this.state;
    const { fullName, businessType, returningLoan, newLoan, loan } = this.state;
    const values = { fullName, businessType, returningLoan, newLoan, loan };

    if (step === 1) {
      return (
        <FrontPage
          nextQuestion={this.nextQuestion}
          handleChange={this.handleChange}
          values={values}
        />
      );
    } else if (step === 2) {
      return (
        <UserDetails
          nextQuestion={this.nextQuestion}
          handleChange={this.handleChange}
          values={values}
        />
      );
    } else if (step === 3) {
      return (
        <BusinessType
          nextQuestion={this.nextQuestion}
          previousQuestion={this.previousQuestion}
          handleChange={this.handleChange}
          values={values}
        />
      );
    } else if (step === 4) {
      return (
        <Loan
          nextQuestion={this.nextQuestion}
          previousQuestion={this.previousQuestion}
          handleChange={this.handleChange}
          values={values}
          answer={this.answer}
        />
      );
    } else if (step === 5) {
      return (
        <ReturningLoan
          nextQuestion={this.nextQuestion}
          previousQuestion={this.previousQuestion}
          handleChange={this.handleChange}
          values={values}
          ReturningLoanAnswer={this.ReturningLoanAnswer}
        />
      );
    } else if (step === 6) {
      return (
        <NewLoan
          nextQuestion={this.nextQuestion}
          NewLoanAnswer={this.NewLoanAnswer}
          handleChange={this.handleChange}
          values={values}
          previousNewQuestion={this.previousNewQuestion}
        />
      );
    } else if (step === 7) {
      return (
        <Comfirm
          nextQuestion={this.nextQuestion}
          previousComfirmQuestion={this.previousComfirmQuestion}
          handleChange={this.handleChange}
          values={values}
          answer={this.answer}
        />
      );
    } else if (step === 8) {
      return (
        <Success
          nextQuestion={this.nextQuestion}
          previousComfirmQuestion={this.previousComfirmQuestion}
          handleChange={this.handleChange}
          values={values}
          answer={this.answer}
        />
      );
    } else {
      return "sales";
    }
  }
}

export default MortgageFoam;
