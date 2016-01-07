/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import { connect } from 'react-redux'
import MerchantListTile from './MerchantListTile'
import { fetchMerchants } from '../../actions'
import {Actions} from 'react-native-router-flux'

var React = require('react-native');


var {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
    } = React;

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
    return {
        merchants: state.merchants.items,
        loading: state.merchants.isLoading
    };
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
    return {
        onIncrement: () => dispatch(increment(1)),
        onDecrement: () => dispatch(decrement(2)),
        onLoadMerchants: () => dispatch(fetchMerchants())
    }
}

class MerchantListView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={Actions.back}>
                    <Text>To Counter</Text>
                </TouchableOpacity>

                {this.props.merchants.length === 0 && !this.props.loading &&
                <TouchableOpacity onPress={this.props.onLoadMerchants}>
                    <Text>Load Merchants</Text>
                </TouchableOpacity>}

                {this.props.loading && <Text>LOADING!</Text>}

                { this.props.merchants.map(merchant => {
                    return (
                        <MerchantListTile
                            key={merchant.id}
                            merchant={merchant}/>
                    );
                })}
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
        color: 'red',
        marginBottom: 5
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MerchantListView);