const initialState = {
    movieList: []
}

const movie = (state = initialState, action) => {
    switch (action.type) {
        case 'REQ_MOVIE_LIST': 
            return{
                ...state,
                movieList: []
            };
        case 'MOVIE_LIST_RECEIVED': 
            return {
                ...state,
                movieList: action.data
            };
    
        default:
            return state;
    }
}

export default movie;