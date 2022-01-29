import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = (props) => {

  const navigation = useNavigation();

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  
    const Accordion= () => {
        return (
        <View style={{width: '90%'}}>
            
            <List.Section /* title="Accordions" */>
              <List.Accordion
                title="SkillSet"
                style={styles.ListAccordion} >
              
                <List.Item title='React Native' style={{justifyContent:"center",backgroundColor: 'white', borderBottomWidth: 0.55, borderBottomColor: 'grey'}}/>
                <List.Item title='Javascript' style={{backgroundColor: 'white', borderBottomWidth: 0.55, borderBottomColor: 'grey'}}/>
                {/* <List.Item title={`Place Of Birth : ${props.detail.child.place_birth}  `} style={{backgroundColor: 'white', borderBottomWidth: 0.55, borderBottomColor: 'grey'}}/> */}
                <List.Item title='HTML & CSS' style={{backgroundColor: 'white', borderBottomWidth: 0.55, borderBottomColor: 'grey'}}/>
                <List.Item title='PHP' style={{backgroundColor: 'white', borderBottomWidth: 0.55, borderBottomColor: 'grey'}}/>
                <List.Item title='SQL' style={{backgroundColor: 'white', borderBottomLeftRadius: 12, borderBottomRightRadius: 12, elevation: 5}}/>
              </List.Accordion>
            </List.Section>
            </View>
          );  
    }

  return (
    <View style={styles.masterView}>
      <View style={styles.view1}>
          <View style={styles.profPicView}>
            <Image
              style={styles.imageVIew}
              source={require('../assets/245501604_4690871857670010_2842784367687757819_n.jpg')}
            />
          </View>
          <View style={styles.nameView}>
            <Text style={styles.nameText}>Fathin Satriani Hasan</Text>
            <Text style={styles.nameText2}>Junior Mobile Developer</Text>
          </View>
          <TouchableOpacity 
            style={styles.btnLogout} 
            onPress={async ()=> {
              props.delToken();
              // props.navigation.navigate('Idx');
            }}
          >
              <Text style={{color: "black", }}>
                LOGOUT
              </Text>
          </TouchableOpacity>
      </View>
      <View style={styles.view2}>
        <Accordion />
        <View style={{height: "75%", width: "90%", backgroundColor: "white", elevation: 20}}>
            <Text style={styles.text1}>Portfolio</Text>
            <Text style={styles.text2}>HiParent</Text>
            <Text style={styles.text3}>Role: Stack Lead & React Native Developer</Text>
            <Text style={styles.text3}>Tech Stack: Linux, Vscode, React Native, Redux JS, Redux Saga, React Library, Javascript</Text>
            <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://github.com/fhasans/HiParents-Project') } >Project Link</Text>
            <Text style={styles.text2}>SeeEvents</Text>
            <Text style={styles.text3}>Role: Stack Lead & React Native Developer</Text>
            <Text style={styles.text3}>Tech Stack: Linux, Vscode, React Native, Redux JS, Redux Saga, React Library, Javascript</Text>
            <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://github.com/fhasans/HiParents-Project') } >Project Link</Text>
        </View>
        
      </View>
      
      
    </View>
  );
};

const redDispTokenRemoval = dispatch => ({
  delToken: () => dispatch({type: 'REMOVE_TOKEN'}),
});

const redState = state => ({
  token: state.auth.token,
});


export default connect(redState, redDispTokenRemoval) (Profile);

const styles = StyleSheet.create({
    masterView: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "column"
    },
    view1: {
      backgroundColor: 'black', 
      elevation: 20, 
      height: '35%', 
      width: "100%", 
      justifyContent: 'center', 
      alignItems: "center", 
      borderBottomRightRadius: 50, 
      borderBottomLeftRadius: 50
    },
    profPicView:{
      width: "33%", 
      height: '50%', 
      marginTop: '10%',
      backgroundColor:"white",
      borderRadius: 100, 
      justifyContent: "center", 
      alignItems: "center"
    },
    imageVIew:{
      width:"95%", 
      height: "95%", 
      backgroundColor: 'black', 
      borderRadius: 100,
      resizeMode: 'cover',
     },
    nameView:{
      marginTop: '1%',
      backgroundColor: "black", 
      elevation: 20, 
      height: '15%', 
      width: '55%', 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    nameText:{
      color: 'white', 
      fontSize: 20, 
      fontWeight: '500'
    },nameText2:{
      color: 'white', 
      fontSize: 14, 
      fontWeight: '500'
    },
    view2:{
      backgroundColor: "white",
      height: '60%', 
      width: '100%',
      flexDirection: "column",
      alignItems: 'center'
    },
    skillsetView:{
      backgroundColor: "white", 
      elevation: 20, 
      height: '15%', 
      width: '100%', 
      justifyContent: 'center'
    },
    skillsetText:{
      color: 'black', 
      fontSize: 25, 
      marginLeft: "5%"
    },
    btnLogout:{
      backgroundColor: "white", 
      width: 190, 
      height: "30%",
      justifyContent: "center",
      alignItems: 'center',
      marginTop: "2%"
    },
    MainContainer: {
      // flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center'
      marginLeft: "5%"
    },
    TextStyle: {
      fontSize: 14,
      color: 'blue',
      textDecorationLine: 'underline'
   
    },
    TextStyle: {
      marginLeft: "3%",
      color: 'blue',
      textDecorationLine: 'underline',
      borderBottomWidth: 2, borderBottomColor: 'grey'
    },
    ListAccordion: {
      backgroundColor: 'white', 
      elevation: 20
    },
    text1:{marginLeft: "3%", marginTop: '3%', fontSize: 16, fontWeight: "800", borderBottomWidth: 2, borderBottomColor: 'grey'},
    text2:{marginLeft: "3%", marginTop: '3%', fontSize: 16, fontWeight: "800"},
    text3:{marginLeft: "3%", marginTop: '3%', fontSize: 16},
    
})
