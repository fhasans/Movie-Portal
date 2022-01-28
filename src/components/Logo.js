import { View, Text } from 'react-native';
import React from 'react';

const Logo = () => {
  return (
    <View style={{height: '40%', justifyContent: 'flex-end', alignItems: "center", backgroundColor: 'white', borderBottomLeftRadius: 200, borderBottomRightRadius: 200}}>
         <Text style={{color:'white', fontSize: 24,backgroundColor: 'black'}}>Movie</Text>
         <Text style={{color:'black', fontSize: 50, backgroundColor: 'white', borderBottomLeftRadius: 8, borderBottomRightRadius: 8}}>Portal</Text>
      </View>
  );
};

export default Logo;
