import React from "react";
import mortgageImg from "../assets/mogae.jpg";
import "../assets/MortgageWrapper.css";
import Header from "./Header";
import { Link } from "react-router-dom";

export const MortgageWrapper = () => {
 
  return (
    <div>
      <Header />
      <div className="body">
        <div className="body-wrap">
          <div className="box-img">
            <img className="kid" src={mortgageImg} alt={mortgageImg} />
          </div>
          <div className="box-text">
            <h2>Mortgage loan</h2>
            <h1>There’s no place like home!</h1>
            <p>
              Home loan will be a perfect solution if you need a loan for a new
              home, serious renovation or construction.
            </p>
            <p><span class="list_round"></span>Fast application processing</p>
            <p><span class="list_round"></span>
              Opportunity to pay back earlier and manage your contract via
              Internet Banking
            </p>
            <p><span class="list_round"></span>
              We constantly offer discounts for home loans, when you receive the
              discount code from the seller and, please, do not forget to submit
              it completing the application for the home loan in the Internet
              Bank.
            </p>
            <p>Find out your possibilities</p>
            <Link to="question" className="link">Apply here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
