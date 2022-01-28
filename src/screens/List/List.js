import { View, Text } from 'react-native';
import React from 'react';
import Logo from '../../components/Logo';

const List = () => {
  return (
    <View style={{flex: 1,flexDirection: 'column', backgroundColor: "black",justifyContent: 'space-between'}}>
      <View>
          <Logo/>
      </View>
    </View>
  );
};

export default List;
