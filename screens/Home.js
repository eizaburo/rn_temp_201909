import React from 'react';
import { View, Text, Button } from 'react-native';
import { Card, Input } from 'react-native-elements';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

class Home extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home</Text>
            </View>
        );
    }
}

export default Home;