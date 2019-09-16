import React from 'react';
import { View, Text, Button } from 'react-native';
import { Card, Input } from 'react-native-elements';

//redux
import { connect } from 'react-redux';
import { updateName } from '../actions/userAction';

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
                    onPress={()=>this.props.updateName('foo@Home')}
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
    }
);

export default connect(mapStateToProps, mapDispatchtoProps)(Home);