/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import { connect } from 'react-redux'
import { increment, decrement } from '../../actions'

var React = require('react-native');
var Button = require('react-native-button');


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

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
    return {
        onIncrement: () => dispatch(increment(1)),
        onDecrement: () => dispatch(decrement(2))
    }
}

class CounterView extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>
                    Value = |{this.props.value}|
                </Text>

                <Button onPress={this.props.onIncrement}>
                     +
                </Button>

                <Button onPress={this.props.onDecrement}>
                     --
                </Button>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MerchantListView);