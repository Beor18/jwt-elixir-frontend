import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import ListaHoteles from '../components/ListaHoteles';

class Home extends Component {

    render() {
        const {isAuthenticated} = this.props.auth;
        const authLinks = (
            <ListaHoteles />
        )
      const guestLinks = (
        <h2>Bienvenido a Home componente usted no esta logeado</h2>
      )
        return(
            <div className="container" style={{ marginTop: '20px'}}>
               {isAuthenticated ? authLinks : guestLinks}
            </div>
            
        );
    }
}

Home.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { loginUser })(withRouter(Home));