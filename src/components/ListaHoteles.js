import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cargarHoteles } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

class ListaHoteles extends Component {
    
    componentDidMount(){
        this.props.cargarHoteles()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
          return this.listarHoteles()
        }
    }

    listarHoteles() {
        const hotel = this.props.hotel
        return Object.keys(hotel).map(key => ( 
            <div key={key} className="card col-3" style={{ float: 'left', marginRight: '0px', marginTop: '15px'}}>
                <div className="card-body">
                <h5 className="card-title">{hotel[key].name}</h5>
                <p className="card-text">$ {hotel[key].price} </p>
                </div>
            </div>
        ))
    }

    render() {
        return(
            <div>{this.listarHoteles()}</div>
        )
    }
}

ListaHoteles.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => ({
    auth: state.auth,
    hotel: state.auth.hotel
})

export default connect(mapStateToProps, { cargarHoteles })(withRouter(ListaHoteles));