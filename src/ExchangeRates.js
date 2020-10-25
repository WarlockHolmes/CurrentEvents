import React from 'react';
import { json, checkStatus } from './utils';


class ExchangeRates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      base: null,
    }
  }

  componentDidMount () {
      fetch(``)
        .then(checkStatus)
        .then(json)
        .then((data) => {
          if (data.Response === 'False') {
            throw new Error(data.Error);
          }

          if (data.Response === 'True') {
            console.log(data);
            this.setState({ });
          }
        })
        .catch((error) => {
          this.setState({ error: error.message });
          console.log(error);
        })
    }

  render() {

    return
  }
}

export default ExchangeRates;
