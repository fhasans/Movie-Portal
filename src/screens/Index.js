import { View, Text, Touchable, StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Index = (props) => {
  return (
    <View>
      <Text>THIS IS INDEX SCREEN</Text>
      <TouchableOpacity style={{backgroundColor: 'red', height: 20, width: 100}} onPress={() => props.navigation.navigate('MainScreen')}>
         <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({

})
