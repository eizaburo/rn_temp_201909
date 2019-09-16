import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

//redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import Home from './screens/Home';
import Profile from './screens/Profile';
import userReducer from './reducers/userReducer';

//stack
const Stack = createStackNavigator(
    {
        Home: { screen: Home },
        Profile: { screen: Profile }
    }
);

//AppContainer
const AppContainer = createAppContainer(Stack);

//redux createStore
const store = createStore(combineReducers({
    userData: userReducer,
}), applyMiddleware(

));

export default class App extends React.Component {
    render() {
        // console.log(store.getState());
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}