import React, { Component } from 'react';
import EuropeanHome from '../components/EuropeanHome';

const Gdpr = (WrappedComponent) => {
  return class Gdpr extends Component {
    render() {
      const x = 0;
      return (
        x > 0 ? <EuropeanHome /> : <WrappedComponent />
      );
    }
  }
}

export default Gdpr;
