import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


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
      <Container maxWidth="sm">
        <Paper style={{padding: 40,textAlign: 'center', marginTop: 100}}>

            <div className="row justify-content-center">
              <h1 className="mb-4 text-center">CONVERSOR DE MOEDAS MAIS DAORA DO PLANETA TERRA</h1>
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
         </Paper>
      </Container>
    </div>
    );
  }
}
