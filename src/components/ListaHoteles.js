import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cargarHoteles } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

class ListaHoteles extends Component {
    
    componentDidMount(){
        this.props.cargarHoteles()
    }

    render() {
        return(
            Object.keys(this.props.hotel).map(key => ( 
                <div key={key} className="card col-3" style={{ float: 'left', marginRight: '0px', marginTop: '15px'}}>
                    <div className="card-body">
                    <h5 className="card-title">{this.props.hotel[key].name}</h5>
                    <p className="card-text">$ {this.props.hotel[key].price} </p>
                    </div>
                </div>
            ))
        )
    }
}

ListaHoteles.propTypes = {
    hotel: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => ({
    hotel: state.auth.hotel
})

export default connect(mapStateToProps, { cargarHoteles })(withRouter(ListaHoteles));