import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Profile = (props) => {
  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity style={{backgroundColor: "red", width: "100%", height: "30%"}} onPress={() => props.navigation.navigate("Index")}>
        <Text>
          LOGOUT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
