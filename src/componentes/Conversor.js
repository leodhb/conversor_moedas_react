import React, { Component } from 'react';

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
          <div className="input-group">
            <input placeholder="Ex: 3.25, 120.50..." type="text" className="form-control" onChange={(event) => {this.setState({moedaA_valor:event.target.value})}}></input>
            <span className="input-group-btn">
               <input type="button" className="btn btn-primary" value="Converter" onClick={this.converter}></input>
            </span>
          </div>
          <h2 className="mt-3">{this.state.txt_convertido}</h2>
      </div>
    );
  }
}
