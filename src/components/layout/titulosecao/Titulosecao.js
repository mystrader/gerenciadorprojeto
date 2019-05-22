import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./titulosecao.css";

class Titulosecao extends Component {

    render() {
        return (
            <div className="titulosecao">
                <div className="content-group-sm">
                    <h1 className="no-margin text-regular uppercase ml-20">
                        <Link to="/" className="titulosecao-link">  <i className="icon-home4 mr-10"></i>{this.props.title} </Link> /
                        <span className="text-light lowercase"> {this.props.titlelevel1}</span>
                    </h1>
                </div>
            </div>
        );
    }
}

export default Titulosecao;