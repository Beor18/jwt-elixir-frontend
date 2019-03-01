import { SET_CURRENT_USER, CARGAR_USUARIO } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    isAuthenticated: false,
    user: {},
    users: {}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        case CARGAR_USUARIO:
        console.log(action)
            return {
                ...state =
                Object.assign({},
                    state, {
                        isAuthenticated: !isEmpty(action.payload),
                        users: action.payload
                    }
                )
            }
        
        default: 
            return state;
    }
}