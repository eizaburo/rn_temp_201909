import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from './screens/Home';
import Profile from './screens/Profile';

//stack
const Stack = createStackNavigator(
    {
        Home: { screen: Home },
        Profile: { screen: Profile }
    }
);

//AppContainer
const AppContainer = createAppContainer(Stack);

export default class App extends React.Component {
    render() {
        return (
            <AppContainer />
        );
    }
}