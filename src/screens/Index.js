import { View, Text, Touchable, StyleSheet } from 'react-native';
import React, {useState,useEffect} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import Logo from '../components/Logo';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

const Index = (props) => {
   const [email,setEmail] = useState();
   const [password,setPassword] = useState();
   const navigation = useNavigation();

   const navHandler = () => {
      props.login({email,password})
   }

  return (
   <LinearGradient
      colors={['#000000', '#000000']}
      style={styles.masterView}
   >
       <Logo/>
      <View style={styles.masterTextInputView}>
         <View style={styles.textInputView}>
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
                     style={styles.emailInput}
                     labelStyle={{color:'white'}}
                     autoCapitalize={'none'}
                     autoCorrect={false}
                     onChangeText={text=>setEmail(text)}
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
                     style={styles.passwordInput}
                     labelStyle={{color:'white'}}
                     inputStyle={{color: 'white'}}
                     autoCapitalize={'none'}
                     autoCorrect={false}
                     secureTextEntry={true}
                     onChangeText={text=>setPassword(text)}
                  />
                  <TouchableOpacity
                     style={styles.btnView}
                     onPress={() => navHandler()}
                  >
                        <Text style={{color: "white"}}>LOGIN</Text>
                  </TouchableOpacity>
         </View>
      </View>
      
   </LinearGradient>
  );
};

const redDispSign = dispatch => ({
   login: loginData => dispatch({type:'LOGIN', data: loginData}),
})

const redState = state => ({
   token: state.auth.token
})

export default connect(redState,redDispSign) (Index);

const styles = StyleSheet.create({
   masterView: {flex: 1, flexDirection: 'column'},
   masterTextInputView: {height:"60%", alignItems: 'center', justifyContent: 'center'},
   textInputView: {width: '80%', alignItems: 'center', backgroundColor: 'black', borderRadius: 20, flexDirection: 'column', elevation: 50},
   emailInput: {backgroundColor: 'black', width: '90%', marginTop: '10%'},
   passwordInput:{backgroundColor: 'black', width: '90%', margin: '2%'},
   btnView: {backgroundColor: 'red', width: 200, height: 40, margin: '10%', justifyContent: "center", alignItems: 'center', borderRadius: 12}
})
