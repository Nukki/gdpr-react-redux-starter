import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from './RegularHome';
import EuropeanHome from './EuropeanHome';

class MainContainer extends Component {
  render() {
    const { ip } = this.props;
    return (
      <div className="big">
        {
          ip ? ( ip.isEU ? <EuropeanHome /> : <Home /> )
             : ( "Loading ...." )
        }
      </div>
    );
  }
}

function mapStateToProps({ ip }) {
  return { ip };
}

export default connect(mapStateToProps)(MainContainer);
