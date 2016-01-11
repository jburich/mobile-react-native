/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import configureStore from './store/configureStore'
import MerchantListView  from './ios/components/MerchantListView'
//import NavigationBarSample   from './ios/components/NavigationContainer'
import SpringRouter from './ios/components/NavigationContainer'
import { fetchMerchants, fetchLocation, fetchEnrollments } from './actions'

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View
    } = React;

const store = configureStore();

store.dispatch(fetchMerchants());
store.dispatch(fetchEnrollments());
store.dispatch(fetchLocation());

var SpringMobile = React.createClass({
    render: function () {
        return (
            <Provider store={store}>
                <SpringRouter/>
            </Provider>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
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
