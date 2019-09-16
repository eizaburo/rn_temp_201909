import React from 'react';
import { View, Text, Button } from 'react-native';
import { Card, Input } from 'react-native-elements';

//redux
import { connect } from 'react-redux';
import { updateName, getValueFromServer } from '../actions/userAction';

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
                <Button
                    title="update name@Home"
                    onPress={() => this.props.updateName('foo@Home')}
                />
                <Button
                    title="update name@Server"
                    onPress={() => this.props.getValueFromServer()}
                />
            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        state: state,
    }
);

const mapDispatchtoProps = dispatch => (
    {
        updateName: (name) => dispatch(updateName(name)),
        getValueFromServer: () => dispatch(getValueFromServer()),
    }
);

export default connect(mapStateToProps, mapDispatchtoProps)(Home);