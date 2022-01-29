import {takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';
import { Alert } from 'react-native';

function* getMovieList(action){
    try {
        const resGetMovieList = yield axios({
            method: 'GET',
            url: 'https://www.mockachino.com/bebf2f82-935c-4b/movielist'
        });
        yield put ({type: 'MOVIE_LIST_RECEIVED', data: resGetMovieList.data.movie})
        console.log('movie list saga: ',action.data);
    } catch (error) {
        console.log(error);
    }
}

function* rootSaga() {
    yield takeLatest('REQ_MOVIE_LIST', getMovieList);
  }

  export default rootSaga;