import React, { Component } from 'react';
import './Perfil.css';

class Perfil extends Component {
    render() {
  
      let img = 'https://tudoparahomens.com.br/wp-content/uploads/2017/01/homem-tranquilo.jpg';

      return (
        <img src={img} width={200} height={200} />
      );
    }
  }

  export default Perfil;