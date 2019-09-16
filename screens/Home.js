import React from 'react';
import { View, Text, Button } from 'react-native';
import { Card, Input } from 'react-native-elements';

//redux
import { connect } from 'react-redux';

class Home extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home</Text>
                <Button
                    title="Go to Profile"
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
                <Text>{this.props.state.userData.user.name}</Text>
            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        state: state,
    }
);

export default connect(mapStateToProps, null)(Home);