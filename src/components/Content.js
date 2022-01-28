import { View, Text, Image, ImageBackground } from 'react-native';
import React from 'react';

const Content = () => {
  return (
    <View style={{backgroundColor: 'white', height: "100%", width: '55%', borderRadius: 10, elevation:10, flexDirection: 'column'}}>
      <Image style={{backgroundColor: "red", height: '80%', borderRadius: 10}}></Image>
      <Text style={{color: 'black', fontSize: 25, marginLeft: '2%', fontWeight: '500'}}>Movie Title</Text>
      <Text style={{color: 'black',fontSize: 16, marginLeft: '2%'}}>2022</Text>
      <ImageBackground></ImageBackground>
    </View>
  );
};

export default Content;
