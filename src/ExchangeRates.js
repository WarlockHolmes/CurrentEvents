import React from 'react';
import { json, checkStatus } from './utils';
import './ExchangeRates.css';

const Table = (props) => {
  const content = Object.entries(props.rates).map(([currency, rate]) => {
      if (rate !== 1) {
        return <tr key={currency}>
          <td>{currency}</td>
          <td>{rate.toFixed(2)}</td>
        </tr>
      }
    }
  );
  return(
    <div id="tablewrap">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Currency</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {content}
        </tbody>
      </table>
    </div>
  )
}


 const BaseSelect = (props) => {
   return (
     <label>Base:
     <select id="base" value={props.value} onChange={props.change}>
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

class ExchangeRates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: true,
      base: 'CAD',
      rates: {},
      error: '',
    }
    this.updateBase = this.updateBase.bind(this);
    this.updateRates = this.updateRates.bind(this);
  }

  updateBase(event){
    let update = () => {
      return new Promise ((resolve, reject) => {
        resolve(this.setState({base: event.target.value}));
      });
    }
    update().then(this.updateRates);
  }

  updateRates(){
    const {base, start} = this.state;
    fetch(`https://alt-exchange-rate.herokuapp.com/latest?base=${base}`)
    .then(checkStatus)
    .then(json)
    .then((data) => {
      if (start) {this.setState({start: false})}
      this.setState({ rates: data.rates });
    })
    .catch((error) => {
      this.setState({ error: error.message });
      console.log(error);
    })
  }

  render() {
    const {base, rates, start} = this.state;

    return (
      <div className="col-md-6 col-12" id="rates">
        <div className="pt-3 row align-content-center justify-content-around">
          <BaseSelect value={base} change={this.updateBase}/>
        </div>
        <div>
          { !start && <Table rates={rates}/> }
        </div>
      </div>
    )
  }
}

export default ExchangeRates;
