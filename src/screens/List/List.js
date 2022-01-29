import { View, Text, Image } from 'react-native';
import Logo from '../../components/Logo';
import React, {useEffect,useState} from 'react'
import { connect } from 'react-redux'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const List = (props) => {
  useEffect(() => {
    props.getMovieList()
  }, []);
  
  const renderData = ({item}) =>
  <TouchableOpacity onPress={() => props.navigation.navigate('DetailList',{passingDetail: item})}>
    <View style={{backgroundColor: "black", height: 80, flexDirection: "row"}}>
      <View style={{width: "30%"}}>
          <Image source={{uri: item.poster_path}} style={{resizeMode: 'cover', width: '90%', height: "90%"}}/>
      </View>
      <View style={{width: "70%", justifyContent: "flex-start", alignItems: 'flex-start'}}>
          <Text style={{color: 'white', fontSize: 16}}>
              {item.original_title}
          </Text>
          <Text style={{color: 'white', fontSize: 16}}>
              {item.vote_average}
          </Text>
      </View>
    </View>
  </TouchableOpacity>

  console.log('LIST SCREEN DATA: ',props.movieList);
  return (
    <View style={{flex: 1,flexDirection: 'column', backgroundColor: "black"}}>
      <View style={{height: "38%"}}>
          <Logo/>
      </View>
    <FlatList
            data={props.movieList}
            renderItem={renderData}
          />
      </View>
      
  );
};

const reduxDispatch = dispatch => ({
  getMovieList: () => dispatch ({type: 'REQ_MOVIE_LIST'})
})

const redStates = state =>({
  movieList: state.movie.movieList
})

export default connect(redStates, reduxDispatch) (List);
