import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

const URL_REGISTRO = 'http://localhost:4000/api/v1/sign_up';
const URL_LOGIN = 'http://localhost:4000/api/v1/sign_in';

export const registerUser = (user, history) => dispatch => {
    axios.post(URL_REGISTRO, user)
            .then(res => history.push('/login'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const loginUser = (user) => dispatch => {
    axios.post(URL_LOGIN, user)
            .then(res => {
                const token = res.data.jwt;
                localStorage.setItem('jwt', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwt');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/login');
}