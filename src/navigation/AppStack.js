import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Index from '../screens/Index';
import Dashboard from '../screens/Dashboard'
import List from '../screens/List/List';
import Detail from '../screens/List/List Detail/Detail'
import Profile from '../screens/Profile'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = (props) => {
  return (
    <Stack.Navigator screenOptions={() => ({headerShown: false})}>
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="MainScreen" component={btmNav} />
    </Stack.Navigator>
  );
};

export default AppStack;

const btmNav = () => {
    return (
        <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'white',
            paddingBottom: 5,
            paddingTop: 5,
            height: "8%",
            
          },
          tabBarActiveTintColor: 'grey',
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({size, color}) => {
            let iconName;
            if (route.name == 'Dashboard') {
              iconName = 'view-dashboard';
            } else if (route.name == 'List') {
              iconName = 'badge-account';
            } else if (route.name == 'Profile') {
              iconName = 'account-child';
            }
            return <Icon name={iconName} size={30} color={color} />;
          },
        })}
        >
           

            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="List" component={List} />
            <Tab.Screen name="Profile" component={Profile} />

        </Tab.Navigator>
    )
}