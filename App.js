import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from './screens/Home';

export default class App extends React.Component {
    render() {
        return (
            <Home />
        );
    }
}