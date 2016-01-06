/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import { connect } from 'react-redux'
import MerchantListTile from './MerchantListTile'
import { fetchMerchants } from '../../actions'

var React = require('react-native');


var {
    View,
    StyleSheet,
    Text,
    TouchableHighlight
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

                {this.props.merchants.length === 0 &&
                <TouchableHighlight onPress={this.props.onLoadMerchants}>
                    <Text>Load Merchants</Text>
                </TouchableHighlight>}

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