import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

import axios from 'axios';

class ListaHoteles extends Component {

    constructor(props){
        super(props);
        this.state = {
          name: '',
          error: ''
        }
      }
    
    componentDidMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:4000/api/v1/hoteles',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +  localStorage.getItem('jwt')
            },
        }).then((response) => {
          this.setState({
            name: response.data.data
          });
        }).catch((error) => {
          this.setState({
            error: 'Error retrieving data'
          });
        });
    }

    render() {
        const { name } = this.state;
        return(
            Object.keys(name).map(key => ( 
                <div key={key} className="card" style={{width: '18rem', float: 'left', marginRight: '20px', marginTop: '15px'}}>
                    <div className="card-body">
                    <h5 className="card-title">{name[key].name}</h5>
                    <p className="card-text">$ {name[key].price} </p>
                    </div>
                </div>
            ))
        )
    }
}

ListaHoteles.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { loginUser })(withRouter(ListaHoteles));