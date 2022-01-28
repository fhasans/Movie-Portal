import { View, Text } from 'react-native';
import React from 'react';
import Logo from '../components/Logo';
import Content from '../components/Content';
import { FlatList } from 'react-native-gesture-handler';

// const renderData = ({item}) =>
//       <View style={{marginBottom:"10%", height: '50%'}}>
//           <Content />
//       </View>

const Dashboard = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column', backgroundColor: "black",justifyContent: 'space-between'}}>
      <Logo/>
      <View style={{marginBottom:"10%", height: '50%'}}>
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
