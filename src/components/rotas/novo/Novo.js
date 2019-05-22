import React, { Component } from "react";
import Titulosecao from "../../layout/titulosecao/Titulosecao";
import "./novo.css";

import api from '../../../Api';
import {Redirect} from 'react-router-dom';



const status = {
  'dev': 'Desenvolvimento',
  'hml': 'Homologação',
  'prod': 'Produção'
};

class Novo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sistema: [],
      isLoading: false,
      redirect: false
    }
    this.salvarProjeto = this.salvarProjeto.bind(this)
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    api.loadSistema().then(res => {
      this.setState({ isLoading: false, sistema: res.data });
    });
  }

  salvarProjeto() {
    const novoProjeto = {
      nome : this.refs.projeto_nome.value,
      status : this.refs.projeto_status.value,
      sistema : this.refs.projeto_sistema.value,
      comentario : this.refs.projeto_comentario.value
    }
    api.saveProjeto(novoProjeto)
    .then((res) =>{ 
      this.setState({      
        redirect: '/sistemas/' + this.refs.projeto_sistema.value        
      });
    });
    
  }

  render() {
    return <div>

      {this.state.redirect && 
      <Redirect to={this.state.redirect} />
      }
        <Titulosecao title="Dashboard" titlelevel1="Novo Projeto" />

        <div className="timeline timeline-left">
          <div className="timeline-container">
            <div className="timeline-row">
              <div className="timeline-icon">
                <div className="bg-info-400">
                  <i className="icon-cloud-check" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="panel panel-body panel-dashed">
                  <div className="media">
                    <div className="media-left">
                      <img src="https://dummyimage.com/100/369/fff.gif" style={{ width: 70, height: 70 }} className="img-circle img-md" alt="sdfsdfsdf" />
                    </div>
                    <div className="media-body">
                      <h6 className="media-heading">Exemplo texto</h6>
                      <p className="text-muted">Exemplo de descrição</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-row">
              <div className="timeline-icon">
                <div className="bg-info-400">
                  <i className=" icon-pencil7" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                <div className="panel  timeline-content panel-info">
                  <div className="panel-heading ">

                  

                      <h6 className="panel-title">
                        Cadastro de Projeto<a className="heading-elements-toggle">
                          <i className="icon-pencil3" />
                        </a>
                      </h6>
                    </div>

                    {/* ------- Cadastro de Sistema ---------- */}
                    <form action="#">                   
                        <div className="panel-body">
                          <div className="form-group">
                            <label>Nome do projeto:</label>
                            <input type="text" className="form-control" placeholder="Digite o nome do sistema" ref='projeto_nome' />
                          </div>

                          <div className="form-group">
                            <div>
                              <label>Status</label>
                              <select name="select" className="form-control" ref='projeto_status'>
                                {Object.keys(status).map(key => (
                                  <option key={key} value={key}>
                                    {status[key]}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="form-group">
                            <div>
                              <label>Sistema</label>
                          <select name="select" className="form-control" ref='projeto_sistema'>
                                {this.state.sistema.map(key => (
                              <option key={key.nome} value={key.nome} >
                                    {key.nome} - {key.descricao}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="form-group">
                            <label>Comentário:</label>
                            <textarea rows={3} cols={5} className="form-control" placeholder="Descreva aqui o projeto (finalidades e aspectos técnicos se necessário)" defaultValue={""}  ref='projeto_comentario' />
                          </div>
                          <div className="text-right">
                            <button type="button" className="btn btn-primary legitRipple" onClick={this.salvarProjeto}>
                              Cadastrar Projeto<i className="icon-checkmark3 position-right" />
                            </button>
                          </div>
                        </div>
                   
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}
export default Novo;
