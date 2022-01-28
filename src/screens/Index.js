import { View, Text, Touchable, StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import Logo from '../components/Logo';

const Index = (props) => {
  return (
   <LinearGradient colors={['#000000', '#000000'/* , '#000000', '#b9b9b9', '#ffffff' */]}style={{flex: 1, flexDirection: 'column'}}>
       <Logo/>
      <View style={{height:"60%", alignItems: 'center', justifyContent: 'center'}}>
         <View style={{width: '80%', alignItems: 'center', backgroundColor: 'black', borderRadius: 20, flexDirection: 'column', elevation: 50}}>
               <Sae
                     label={'Email Address'}
                     iconClass={FontAwesomeIcon}
                     iconName={'pencil'}
                     iconColor={'red'}
                     inputPadding={16}
                     labelHeight={24}
                     // active border height
                     borderHeight={3}
                     // TextInput props
                     style={{backgroundColor: 'black', width: '90%', marginTop: '10%'}}
                     labelStyle={{color:'white'}}
                     autoCapitalize={'none'}
                     autoCorrect={false}
                     
                  />
                  <Sae
                     label={'Password'}
                     iconClass={FontAwesomeIcon}
                     iconName={'pencil'}
                     iconColor={'red'}
                     inputPadding={16}
                     labelHeight={24}
                     // active border height
                     borderHeight={3}
                     // TextInput props
                     style={{backgroundColor: 'black', width: '90%', margin: '2%'}}
                     labelStyle={{color:'white'}}
                     inputStyle={{color: 'white'}}
                     autoCapitalize={'none'}
                     autoCorrect={false}
                     secureTextEntry={true}
                  />
                  <TouchableOpacity style={{backgroundColor: 'red', width: 200, height: 40, margin: '10%', justifyContent: "center", alignItems: 'center', borderRadius: 12}} onPress={() => props.navigation.navigate('MainScreen')}>
                        <Text style={{color: "white"}}>LOGIN</Text>
                  </TouchableOpacity>
         </View>
      </View>
      
   </LinearGradient>
  );
};

export default Index;

const styles = StyleSheet.create({

})
