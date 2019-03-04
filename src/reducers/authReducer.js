import { SET_CURRENT_USER, CARGAR_USUARIO, CARGAR_HOTELES } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    isAuthenticated: false,
    user: {},
    users: {},
    hotel: {}
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
        case CARGAR_HOTELES:
        console.log(action)
            return {
                ...state =
                Object.assign({}, 
                    state, {
                        isAuthenticated: !isEmpty(action.payload),
                        hotel: action.payload
                    }
                )
            }
        
        default: 
            return state;
    }
}