import React, { useState } from "react";
import "./CreditCard.css";

function CreditCard() {
  const [state, setState] = useState({
    chName: "",
    cardNumber: "",
    expirymonth: "",
    expiryyear: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {};

  return (
    <div className="CreditFormContainer">
      <form className="credit-Form" onSubmit={handleSubmit}>
        <label className="labell">
          <p>Cardholder Name: </p>
          <input
            className="input"
            type="text"
            name="chName"
            value={state.chName}
            onChange={handleChange}
            placeholder={"Cardholder Name"}
          />
        </label>
        <label className="labell">
          <p> Card Number: </p>
          <input
            className="input"
            type="number"
            name="cardNumber"
            value={state.cardNumber}
            onChange={handleChange}
            placeholder={"Card Number"}
            maxLength="16"
          />
        </label>
        <div className="expiry">
          <label className="label2">
            <p>Expiry Month: </p>
            <select
              className="input2"
              name="expirymonth"
              value={state.expirymonth}
              onChange={handleChange}
            >
              <option value="--">--</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </label>
          <label className="label2">
            <p>Expiry Year: </p>
            <select
              className="input2"
              name="expiryyear"
              value={state.expiryyear}
              onChange={handleChange}
            >
              <option value="--">--</option>
              <option value={new Date().getFullYear()}>23</option>
              <option value={new Date().getFullYear() + 1}>24</option>
              <option value={new Date().getFullYear() + 2}>25</option>
              <option value={new Date().getFullYear() + 3}>26</option>
              <option value={new Date().getFullYear() + 4}>27</option>
              <option value={new Date().getFullYear() + 5}>28</option>
              <option value={new Date().getFullYear() + 6}>29</option>
            </select>
          </label>
          <label className="label2">
            <p>CVV: </p>
            <input
              className="input2"
              type="password"
              name="cvv"
              value={state.cvv}
              onChange={handleChange}
              placeholder={"CVV"}
              defaultValue={""}
              maxLength="3"
            />
          </label>
        </div>
        <button className="submitButton" onClick={handleSubmit}>Submit</button>
      </form>
      {/* <h5>Cardholder name: {state.chName}</h5>
      <h5>Card Number: {state.cardNumber}</h5>
      <h5>Expiry Month: {state.expirymonth}</h5>
      <h5>Expiry Year: {state.expiryyear}</h5>
      <h5>CVV: {state.cvv}</h5> */}
    </div>
  );
}

export default CreditCard;
