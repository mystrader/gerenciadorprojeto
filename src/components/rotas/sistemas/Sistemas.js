import React, { Component } from 'react';
import Titulosecao from "../../layout/titulosecao/Titulosecao";
import api from '../../../Api';
import { Link } from 'react-router-dom';

class Sistemas extends Component{

  constructor(props) {
    super(props);

    this.state = {
      sistema: [],
      isLoading: false
    }
    this.renderSistema = this.renderSistema.bind(this);
    this.loadData = this.loadData.bind(this);
  }


  componentDidMount() {
    this.loadData();
  }
  
  loadData(){
    this.setState({ isLoading: true });
    api.loadProjetoPorSistema(this.props.match.params.sistema).then(res => {
      this.setState({ isLoading: false, sistema: res.data });
    });
  }

  deletarSistema(id){
      api.deleteProjetoItem(id).then((res) => this.loadData());
       
  }

  renderSistema(sistema){
    return <div key={sistema.id}>
        <ul className="media-list">
          <li className="media panel-body stack-media-on-mobile" >
            <div className="media-left" >            
                <img src="https://dummyimage.com/100/369/fff.gif" className="img-rounded img-lg" alt="nome" />         
            </div>
            <div className="media-body">
              <h6 className="media-heading text-semibold">
                {sistema.nome}

                [<Link to={'/sistemas/edit/' + sistema.id}> Editar </Link> ]
                [<a onClick={() => this.deletarSistema(sistema.id)}> Excluir </a> ]
              </h6>
              
              <ul className="list-inline list-inline-separate text-muted mb-10">
                <li>{sistema.sistema}</li>
              </ul>
              {sistema.comentario}
            </div>
            <div className="media-right text-nowrap">
              <span className="label bg-blue"> {sistema.status}</span>
            </div>
          </li>
        </ul>
        <hr />
        </div>
  }


    render(){
        return <div>
            <Titulosecao title="Dashboard" titlelevel1="Sistemas cadastrados (visualização)" />
 <div className="panel panel-white">
        <div className="panel-heading">
          <h6 className="panel-title text-semibold">Você está na seção <strong>{this.props.match.params.sistema} </strong></h6>
<br />
          {this.state.isLoading &&
            <div className="alert alert-info alert-styled-left alert-bordered">
            <i className = "icon-spinner4 spinner" /> carregando...
          </div>}
           
         

          { !this.state.isLoading && this.state.sistema.length === 0  &&
          <div className="alert alert-info alert-styled-left alert-bordered">
            Nenhum sistema cadastrado
          </div>}
         

        </div>
          { !this.state.isLoading &&
            this.state.sistema.map(this.renderSistema)
          }
      </div>


         
          </div>
    }
}
export default Sistemas