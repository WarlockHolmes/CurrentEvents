import React from 'react';
import { json, checkStatus } from './utils';


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
      <div className="container">
        <div className="row">
          <div className="col-4" id="converter">
            <label>From:
            <select id="currency1" value={currency1} onChange={this.newCurrency1}>
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
            <input type="number" id="amount" value={amount} onChange={this.amountChange}/>
            <label>To:
            <select id="currency2" value={currency2} onChange={this.newCurrency2}>
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
          </div>
        </div>
        <div className="row">
          <p>= {result}</p>
        </div>
      </div>
    );
  }
}

export default CurrencyConverter;
