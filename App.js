import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {FontAwesome5} from '@expo/vector-icons'
import {Feather} from '@expo/vector-icons'

import ProfileScreen from './Screens/ProfileScreen'
import Login from './Screens/Login'
import SignUp from './Screens/SignUp'
import Menu from './Screens/Menu'
import forgotPassword from './Screens/forgotPassword'

import {
  DrawerItemList
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Menu">
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="SignUp" component={SignUp} />
    </Tab.Navigator>
  );
}

function DrawerNav() {
  return(   <Drawer.Navigator initialRouteName="Menu">
    <Drawer.Screen name="Menu" component={MyTabs} />
    <Drawer.Screen name="SignUp" component={SignUp} />
  </Drawer.Navigator>
  )
}

 export default function App() {
 // return <SignUp/>
return(
 <NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown: true}} initialRouteName="Login">
     <Stack.Screen name="Login"
     component={Login}
     options={{
    headerStyle: {
      backgroundColor: '#00cccc'
    }
    }}
     />
     <Stack.Screen name="SignUp" component={SignUp}      options={{
    headerStyle: {
      backgroundColor: '#00cccc'
    }
    }}/>
     <Stack.Screen name="forgotPassword" component={forgotPassword} />
     <Stack.Screen name="Menu" component={DrawerNav} />
   </Stack.Navigator>
 </NavigationContainer>
);
}

