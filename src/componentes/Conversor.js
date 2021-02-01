import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class Conversor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moedaA_valor: "0",
      moedaB_valor: 0,
      txt_convertido: "insira os valores"
    }

    this.converter = this.converter.bind(this)
  }


  converter(){
    let txt_convertido = "convertendo...";
    this.setState({txt_convertido});

    let url = 'https://api.exchangeratesapi.io/latest?symbols='+this.props.moedaB+'&base='+this.props.moedaA;

    fetch(url)
    .then(res=>{
      return res.json();
    })
    .then(json=>{
      let moeda = this.props.moedaB;
      let cotacao = null;
      try{
        cotacao = json['rates'][moeda];
      }
      catch {
        cotacao = 7788193075;
      }
      let moedaB_valor = (parseFloat(this.state.moedaA_valor * cotacao)).toFixed(2);
      this.setState({moedaB_valor});
      let txt_convertido = this.props.moedaA + ' ' + this.state.moedaA_valor + ' = '+ this.props.moedaB + ' ' + moedaB_valor;

      if(cotacao === 7788193075)
      {
        txt_convertido = 'Moeda indisponivel na api'
      }
      
      this.setState({txt_convertido});
    })
  }
  render() {
    return (
      <div className="conversor text-center mt-4">
          <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
          <TextField style={{marginRight: 30}} placeholder="Ex: 3.25, 120.50..." id="standard-basic" onChange={(event) => {this.setState({moedaA_valor: event.target.value})}}></TextField>
          <Button variant="contained" color="primary" onClick={this.converter}>Converter</Button>
          <h2 className="mt-3">{this.state.txt_convertido}</h2>
      </div>
    );
  }
}
