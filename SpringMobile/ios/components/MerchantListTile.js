'use strict';

import { increment, decrement } from '../../actions'

var React = require('react-native');

var {
    View,
    StyleSheet,
    Text
    } = React;


class MerchantListTile extends React.Component{
    render() {
        return (
            <View>
                <Text style={styles.name}>
                    {this.props.merchant.business_name}
                </Text>
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

export default MerchantListTile;