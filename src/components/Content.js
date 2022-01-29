import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';

const Content = (props) => {
  return (
    <View style={styles.masterView}>
      <Image style={styles.imageView} />
      <Text style={styles.titleText}>{props.movieTitle}</Text>
      <Text style={styles.yearText}>{props.movieYear}</Text>
      <Text style={styles.yearText}>{props.movieRating}</Text>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
    masterView:{backgroundColor: 'white', height: "100%", width: '55%', borderRadius: 10, elevation:10, flexDirection: 'column'},
    imageView:{backgroundColor: "red", height: '80%', borderRadius: 10},
    titleText:{color: 'black', fontSize: 25, marginLeft: '2%', fontWeight: '500'},
    yearText:{color: 'black',fontSize: 16, marginLeft: '2%'},

})