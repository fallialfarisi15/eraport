import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Masuk, Splash} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
        <Stack.Screen name="Masuk" component={Masuk} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        
     </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
