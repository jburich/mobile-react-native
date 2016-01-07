import React, {AppRegistry, Navigator, StyleSheet, Text, View} from 'react-native'
import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux'
import { connect } from 'react-redux'

import MerchantListView from './MerchantListView'
import CounterView from './CounterView'

export default class SpringRouter extends React.Component {
    render() {
        return (
            <Router>
                <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
                <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
                <Schema name="withoutAnimation"/>

                <Route name="home" component={CounterView} initial={true} title="Counter Views"/>
                <Route name="merchants" component={MerchantListView} title="Merchants"/>
            </Router>
        );
    }
}