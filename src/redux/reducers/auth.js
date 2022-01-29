const initialState={
    token: ''
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: ''
            };
        case 'STORE_TOKEN':
            return {
                ...state,
                token: action.savetoken
            };
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                token: action.token,
            }
        case 'LOGIN_FAILED':
            return{
                ...state
            }
        case 'REMOVE_TOKEN':
            return{
                ...state,
                token: action.token,
                token: ''
            }
        case 'REMOVE_TOKEN_SUCCESS':
            return{
                ...state,
                token:''
            }
        default:
            return state;
    }
}

export default auth;