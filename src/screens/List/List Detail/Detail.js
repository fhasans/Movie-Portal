import { View, Text, Image } from 'react-native';
import React from 'react';

const Detail = (props) => {
  console.log(props.route.params.passingDetail);
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{height: "80%"}}>
         <Image source={{uri: props.route.params.passingDetail.poster_path}} style={{resizeMode: 'cover', width: '100%', height: "100%"}}/>
      </View>
      <View style={{flex: 1,backgroundColor: "black"}}>
          <View style={{flexDirection: "row"}}>
              <Text style={{fontSize: 20, color: 'white', marginLeft: '5%', fontWeight: "600"}}>{props.route.params.passingDetail.original_title}</Text>
              <Text style={{fontSize: 20, color: 'red', marginLeft: '5%', fontWeight: "600", alignSelf: "flex-end"}}>{props.route.params.passingDetail.vote_average}</Text>
          </View>
          <Text style={{color: "white", marginTop: "2%", marginLeft: '5%', width: "90.5%"}}>{props.route.params.passingDetail.overview}</Text>
      </View>
     
      
    </View>
  );
};

export default Detail;
