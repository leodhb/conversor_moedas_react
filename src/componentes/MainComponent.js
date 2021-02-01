import React, { Component } from 'react';

import './MainComponent.css';
import Conversor from './Conversor';
import CurrencySelector from './CurrencySelector';

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        moedaA: 'USD',
        moedaB: 'BRL'
    };
  }

  changeValueA = moedaA => {
    this.setState({
      moedaA
    })
  };
  
  changeValueB = moedaB => {
      this.setState({
        moedaB
      })
  };

  
  render() {
    return (
    <div className="App">
      <div className="container d-flex h-100">
        <div className="row justify-content-center align-items-center h-100 mt-4">
          <div className="col-lg-6 card-conversor">
            <div className="row justify-content-center">
              <h1 className="mb-4">CONVERSOR DE MOEDAS</h1>
              <div className="col-lg-5">
                <CurrencySelector getChildSelect={this.changeValueA} idx='select_A' valor={this.state.moedaA} onClick={this.changeA}></CurrencySelector>
              </div>
              <div className="col-lg-2 text-center">
                <h4>para</h4>
              </div>
              <div className="col-lg-5">
                <CurrencySelector getChildSelect={this.changeValueB} idx='select_B' valor={this.state.moedaB}></CurrencySelector>
              </div>
            </div>
              <Conversor moedaA={this.state.moedaA} moedaB={this.state.moedaB}></Conversor>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
