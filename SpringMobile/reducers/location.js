import { handleActions } from 'redux-actions'

export default handleActions({
        REQUEST_LOCATION: (state, action) => ({
            isLoading: true,
            ...state
        }),

        RECEIVE_LOCATION: (state, action) => {
            console.log(action);
            if ( action.error || action.payload.code > 0 ) {
                return {
                    isLoading: false,
                    gpsError: true,
                    ...state
                };
            } else {
                return {
                    isLoading: false,
                    gpsSetLocation: true,
                    geoLocation: action.payload.coords
                };
            }
        }
    },
    {
        isLoading: false,
        gpsError: false,
        gpsSetLocation: false,
        geoLocation: {
            //default to Chicago
            latitude: 41.9399,
            longitude: -87.6547
        } // this follows the html5 geoLocation spec
    }
);