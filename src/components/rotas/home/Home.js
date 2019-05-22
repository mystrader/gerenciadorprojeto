import React, { Component} from 'react';
import Titulosecao from '../../layout/titulosecao/Titulosecao';
import api from '../../../Api';

import {Link} from 'react-router-dom';
import './home.css';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sistema: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    api.loadSistema().then(res => {
      this.setState({ isLoading: false, sistema: res.data });
    });
  }

  renderPublicosLink(sistema) {
    return <div className="col-lg-4 col-md-4" key={sistema.nome}>
    
          <div className="panel panel-body">
            <Link to={`/sistemas/${sistema.nome}`}>
              <div className="media">
                <div className="media-left">
                  <img src={sistema.logo} style={{ width: 70, height: 70 }} className="img-circle img-md" alt={sistema.nome} />
                </div>
                <div className="media-body">
                  <h6 className="media-heading">{sistema.nome} </h6>
                  <p className="text-muted">{sistema.descricao}</p>
                </div>
              </div>
            </Link>
          </div>
      </div>;
  }

  render() {
    return <div>
        {this.state.isLoading && 
          <div className="alert alert-info alert-styled-left alert-bordered">
            <i className="icon-spinner4 spinner" /> Aguardando a <strong>
                API
            </strong> ...
          </div>}

        <Titulosecao title="Dashboard" titlelevel1="Sistemas cadastrados" />
        <div className="panel-body">
          <div className="row">
          <div className="col-md-4 col-lg-4">
              <div className="panel panel-body media-link">
                <Link to="/novo">
                  <div className="media">
                    <div className="media-left">
                      <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" width="60px">
                        <circle fill="#57985a" cx="24" cy="24" r="21" />
                        <g fill="#fff">
                          <rect x="21" y="14" width="6" height="20" />
                          <rect x="14" y="21" width="20" height="6" />
                        </g>
                      </svg>
                    </div>
                    <div className="media-body">
                      <h6 className="media-heading">Adicionar Sistema</h6>
                      <p className="text-muted">
                        {" "}
                        Novo sistema feito pela equipe portal SEFAZRJ
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {!this.state.isLoading && <div className="row">
              {this.state.sistema.map(this.renderPublicosLink)}
              {/*JSON.stringify(this.state.publicos)*/}
            </div>}
        </div>
      </div>;
  }
}

export default Home;
