/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import configureStore from './store/configureStore'
import MerchantListView  from './ios/components/MerchantListView'

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View
    } = React;

const store = configureStore();

var SpringMobile = React.createClass({
    render: function () {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                        To get started, edit index.ios.js
                        The file has been edited.
                    </Text>
                    <Text style={styles.instructions}>
                        Press Cmd+R to reload,{'\n'}
                        Cmd+D or shake for dev menu
                    </Text>
                    <MerchantListView/>
                </View>
            </Provider>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

AppRegistry.registerComponent('SpringMobile', () => SpringMobile);
