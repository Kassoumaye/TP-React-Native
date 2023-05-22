import {View, Text} from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../Screens/Home";
import BottomTabs from "../Screens/Tabs";

const Stack = createNativeStackNavigator();
const Routers = () => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="home" screenListeners={{headerShown:false}}>
        <Stack.Screen name="Home" component={BottomTabs} />
      </Stack.Navigator>
      </NavigationContainer>
};

export default Routers;
