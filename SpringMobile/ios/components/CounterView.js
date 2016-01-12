/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import { connect } from 'react-redux'
import { increment, decrement } from '../../actions'

var React = require('react-native');
import {Actions} from 'react-native-router-flux'

var {
    View,
    StyleSheet,
    Text
    } = React;

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
    return {
        value: state.incrementer.counter
    }
}

//// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
    return {

    }
}

class CounterView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>
                    Value = |{this.props.value}|
                </Text>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterView);