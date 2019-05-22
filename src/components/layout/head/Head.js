import React, { Component } from 'react';

import logorjtopo from '../../../assets/svg/logo_gov-rj.svg';
import logoseplagsefaz from '../../../assets/svg/sefaz-branco.svg';
import Menu from '../../../components/layout/menu/Menu';
import './head.css';




class Head extends Component {
  
    render() {
        return (
            <div>
                <div className="top-govpadrao">
                    <img src={logorjtopo} alt="Governo do Estado do Rio de Janeiro" className="top-govpadrao-img" />
                </div>

                <div className="page-header page-header-inverse bg-primary-800">
                    <div className="page-header-content" >
                        <div className="page-title">
                            <h4>{this.props.title}</h4>
                            <div>{this.props.subtitle}</div>
                        </div>
                        <div className="heading-elements">
                            <img src={logoseplagsefaz} alt="Logo Secretaria de Fazenda e Planejamento" />
                        </div>                
                    </div>
                    <Menu />
                </div>

            </div>
        );
    }
}

export default Head;