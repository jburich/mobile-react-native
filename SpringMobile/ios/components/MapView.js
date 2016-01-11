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
    MapView,
    StyleSheet,
    View,
    TouchableOpacity
    } = React;

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
    var locations = [];
    state.merchants.items.forEach(merchant => {

        //merchant.merchant_locations.forEach(merchant_location => locations.push(merchant_location));
        merchant.merchant_locations.forEach(merchant_location => {
            if (merchant_location.latitude && merchant_location.longitude) {
                locations.push({
                    title: merchant.business_name,
                    subtitle: merchant_location.address1 + '\n' + merchant_location.distance,
                    latitude: parseFloat(merchant_location.latitude),
                    longitude: parseFloat(merchant_location.longitude),
                    view: <View style={merchant.hasOffers ? styles.offersDot : styles.noOffersDot}/>
                })
            }
        });
    });
    console.log(state.currentLocation);
    return {
        centerPoint: {
            latitude: state.currentLocation.geoLocation.latitude,
            longitude: state.currentLocation.geoLocation.longitude,
            latitudeDelta: .05,
            longitudeDelta: .05
        },
        annotations: locations
    };
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
    return {
        onIncrement: () => dispatch(increment(1)),
        onDecrement: () => dispatch(decrement(2))
    }
}

class SpringMapView extends React.Component {
    render() {
        return (
            <MapView
                style={styles.map}
                showsUserLocation={true}
                followUserLocation={false}
                rotateEnabled={true}
                showsPointsOfInterest={false}
                annotations={this.props.annotations}
                region={this.props.centerPoint}
            />
        );
    }
}

var styles = StyleSheet.create({
    map: {
        flex: 1
    },
    offersDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#972166"
    },
    noOffersDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#63D8E8"
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpringMapView);