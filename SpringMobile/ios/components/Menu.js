const React = require('react-native');
const {
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
    Component,
    } = React;

import { connect } from 'react-redux'
import {Actions, PageStore} from 'react-native-router-flux'

function mapStateToProps(state) {
    return {
        value: state.incrementer.counter
    }
}

//// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
    return {
        //onUpdate
    }
}

class MenuButton extends Component {
    static contextTypes = {drawer: React.PropTypes.object};

    render() {
        return (
            <View style={styles.divider}>
                <TouchableOpacity underlayColor={'#6BCB97'} onPress={() => {
                        if ( this.props.action ) {
                            Actions[this.props.action].call();
                        }
                        this.context.drawer.close();
                    }}>
                    <Text style={styles.button}>{this.props.children}</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

class Menu extends Component {
    render() {
        return (
            <ScrollView scrollsToTop={false} style={styles.menu}>

                <MenuButton action={"merchants"}>
                    To Merchant List
                </MenuButton>

                <MenuButton action={"map"}>
                    To Map
                </MenuButton>


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    menu: {
        backgroundColor: '#51626F',
        padding: 15
    },
    button: {
        color: 'white',
        padding: 5,
        fontSize: 16
    },
    divider: {
        borderBottomColor: '#6BCB97',
        borderBottomWidth: 1
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
