import { View, Text, StyleSheet } from 'react-native';
import React, {useEffect,useState} from 'react'
import Logo from '../components/Logo';
import Content from '../components/Content';
import { connect } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler';

// const renderData = ({item}) =>
//       <View style={{marginBottom:"10%", height: '50%'}}>
//           <Content />
//       </View>

const Dashboard = () => {
  return (
    <View style={styles.masterView}>
      <Logo/>
      <View style={styles.contentView}>
          {/* <Content /> */}
      </View>
      {/* <FlatList
        data={data}
        renderItem={renderData}
      /> */}
    </View>
  );
};


export default Dashboard;

const styles = StyleSheet.create({
  masterView: {flex: 1, flexDirection: 'column', backgroundColor: "black",justifyContent: 'space-between'},
  contentView: {marginBottom:"10%", height: '50%'}
})
