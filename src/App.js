import React, { Component } from 'react';

import {
    BrowserRouter as Router, 
    Route, 
    Link} from 'react-router-dom';
    

import Head from './components/layout/head/Head';
import Home from './components/rotas/home/Home';
import Novo from './components/rotas/novo/Novo';
import Edit from './components/rotas/edit/Edit';
import Sistemas from './components/rotas/sistemas/Sistemas';

import Titulosecao from './components/layout/titulosecao/Titulosecao';


//Functional stateless components
const Sobre = () => <div> <Titulosecao title="SEÇÃO" titlelevel1="Sobre" /></div> ;




class App extends Component {
    render() {
        return <Router>
            <div>
              <Head title="Sistemas da Equipe Portal  - SATI" subtitle="Secretaria de Fazenda e Planejamento RJ" />

              <div className="page-container">
                <div className="page-content">
                  <div className="sidebar sidebar-main sidebar-default sidebar-separate">
                    <div className="sidebar-content">
                      <div className="sidebar-category sidebar-category-visible">
                        <div className="category-title">
                          <span>Navegação (primária)</span>
                        </div>

                        <div className="category-content no-padding">
                          <ul className="navigation navigation-main navigation-accordion">
                            <li className="navigation-header">
                              <span>Projetos</span> <i className="icon-menu" data-original-title="Main pages" />
                            </li>
                            <li>
                              <Link to="/" className="legitRipple">
                                <i className="icon-home4" /> <span>
                                  Dashboard
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/novo" className="legitRipple">
                                <i className="icon-file-plus" />
                                <span>Novo </span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/sobre" className="legitRipple">
                                <i className="icon-copy" /> <span>
                                  Sobre o Sistema
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content-wrapper">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/sistemas/edit/:id" component={Edit} />
                    <Route exact path="/sistemas/:sistema" component={Sistemas} />
                    <Route exact path="/novo" component={Novo} />
                    <Route exact path="/sobre" component={Sobre} />
                  </div>
                </div>
              </div>
            </div>
          </Router>;
    }
}
export default App;