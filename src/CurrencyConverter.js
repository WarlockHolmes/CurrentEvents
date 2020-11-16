import React from 'react';
import { json, checkStatus } from './utils';

import './CurrencyConverter.css';

const CurrencySelect = (props) => {
  return (
    <label>{props.label}
    <select id={props.id} value={props.slot} onChange={props.change}>
      <option value="AUD">Australian Dollar</option>
      <option value="BGN">Bulgarian Lev</option>
      <option value="BRL">Brazilian Real</option>
      <option value="CAD">Canadian Dollar</option>
      <option value="CHF">Swiss Franc</option>
      <option value="CNY">Chinese Yuan</option>
      <option value="CZK">Czech Koruna</option>
      <option value="DKK">Danish Krone</option>
      <option value="EUR">Euro</option>
      <option value="GBP">British Pound Sterling</option>
      <option value="HKD">Hong Kong Dollar</option>
      <option value="HRK">Croatian Kuna</option>
      <option value="HUF">Hungarian Forint</option>
      <option value="IDR">Indonesian Rupiah</option>
      <option value="ILS">Israeli New Shekel</option>
      <option value="INR">Indian Rupee</option>
      <option value="ISK">Icelandic Króna</option>
      <option value="JPY">Japanese Yen</option>
      <option value="KRW">South Korean Won</option>
      <option value="MXN">Mexican Peso</option>
      <option value="MYR">Malaysian Ringgit</option>
      <option value="NOK">Norwegian Krone</option>
      <option value="NZD">New Zealand Dollar</option>
      <option value="PHP">Philippine Peso</option>
      <option value="PLN">Polish Złoty</option>
      <option value="RON">Romanian Leu</option>
      <option value="RUB">Russian Ruble</option>
      <option value="SEK">Swedish Kronor</option>
      <option value="SGD">Singapore Dollar</option>
      <option value="THB">Thai Baht</option>
      <option value="TRY">Turkish Lira</option>
      <option value="USD">United States Dollar</option>
      <option value="ZAR">South African Rand</option>
    </select>
    </label>
  )
}

class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency1: 'CAD',
      currency2: 'HKD',
      amount: '0',
      rate: '',
      error: '',
    };
    this.newCurrency1 = this.newCurrency1.bind(this);
    this.newCurrency2 = this.newCurrency2.bind(this);
    this.updateRate = this.updateRate.bind(this);
    this.amountChange = this.amountChange.bind(this);
  }

  amountChange(event) {
    let update = () => {
      return new Promise ((resolve, reject) => {
        resolve(this.setState({ amount: event.target.value }));
      });
    }
    update().then(this.updateRate);
  }

  newCurrency1(event) {
    let update = () => {
      return new Promise ((resolve, reject) => {
        resolve(this.setState({ currency1: event.target.value }));
      });
    }
    update().then(this.updateRate);
  }

  newCurrency2(event) {
    let update = () => {
      return new Promise ((resolve, reject) => {
        resolve(this.setState({ currency2: event.target.value }));
      });
    }
    update().then(this.updateRate);
  }

  updateRate() {
    const { currency1, currency2 } = this.state;
    fetch(`https://alt-exchange-rate.herokuapp.com/latest?base=${currency1}&symbols=${currency2}`)
    .then(checkStatus)
    .then(json)
    .then((data) => {
      console.log(data.rates[currency2]);
      this.setState({ rate: data.rates[currency2] });
    })
    .catch((error) => {
      this.setState({ error: error.message });
      console.log(error);
    })
  }

  render() {
    const { currency1, currency2, rate, amount } = this.state;
    let res = amount*rate;
    const result = res.toFixed(2);
    return (
      <div className="col-md-6 col-12 my-auto" id="converter">
        <h3 className="text-center font-weight-light">Currency Converter</h3>
        <div className="row justify-content-center">
          <CurrencySelect label='From:' slot={currency1} change={this.newCurrency1} id='currency1'/>
        </div>
        <div className="row justify-content-center">
          <input type="number" id="amount" value={amount} onChange={this.amountChange}/>
        </div>
        <div className="row justify-content-center">
          <CurrencySelect label='To:' slot={currency2}  change={this.newCurrency2} id='currency2'/>
        </div>
        <div id="result">
          <p className="text-center">= {result}</p>
        </div>
      </div>
    );
  }
}

export default CurrencyConverter;
