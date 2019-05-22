import React, { Component } from 'react';
import avatar from '../../../assets/images/pic-marcus.jpg';

const conteudo = {
    avatar: avatar,
    usuario: "marcus cunha",
}

class Menu extends Component {
    render() {
        return <div className='navbar navbar-inverse navbar-transparent bg-primary-900 affix-top' id='navbar-second' >
            <ul className="nav navbar-nav no-border visible-xs-block">
              <li>
                <a className="text-center collapsed" data-toggle="collapse" data-target="#navbar-second-toggle">
                  <i className="icon-menu7" />
                </a>
              </li>
            </ul>
            <div className="navbar-collapse collapse" id="navbar-second-toggle">
              <ul className="nav navbar-nav navbar-nav-material">
                <li>
                  <a href="/inicial.html" className="legitRipple">
                    Inicial
                  </a>
                </li>
                <li>
                  <a href="http://atendimentosati.fazenda.rj.gov.br/redmine" className="legitRipple">
                    Chamados
                  </a>
                </li>
                <li>
                  <a href="http://lp-padraosistemas.surge.sh/" className="legitRipple">
                    padrão sistemas
                  </a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-nav-material navbar-right ">
                <li>
                  <a href="https://bitbucket.org/sefazrjtech/padraosefaz-react/src/master/" className="legitRipple">
                    <i className="icon-github4 Bitbucket" /> bitbucket
                  </a>
                </li>
                <li className="dropdown dropdown-user">
                  <a className="dropdown-toggle legitRipple" data-toggle="dropdown">
                    <img src={conteudo.avatar} alt="avatar" />
                    <span>{conteudo.usuario.toUpperCase()}</span>
                    <i className="caret" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li>
                      <a href="">
                        <span className="badge bg-blue pull-right">
                          3
                        </span>
                        <i className="icon-comment-discussion" /> Mensagens
                      </a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="">
                        <i className="icon-cog5" /> Configuração
                      </a>
                    </li>
                    <li>
                      <a href="/index.html">
                        <i className="icon-switch2" /> Sair
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>;
    }
}

export default Menu;