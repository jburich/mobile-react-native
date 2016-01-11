import { createAction } from 'redux-actions';

export const INCREMENT = 'INCREMENT';
export const increment = createAction(INCREMENT);

export const DECREMENT = 'DECREMENT';
export const decrement = createAction(DECREMENT);

export const REQUEST_LOCATION = 'REQUEST_LOCATION';
let requestLocation = createAction(REQUEST_LOCATION);
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
let receiveLocation = createAction(RECEIVE_LOCATION);
export function fetchLocation() {
    return dispatch => {

        // First dispatch: the app state is updated to inform
        // that the API call is starting.

        dispatch(requestLocation());

        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.

        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.

        return new Promise(() => {
            console.log('requesting gps')
            navigator.geolocation.watchPosition(
                (position) => dispatch(receiveLocation(position)),
                (error) => dispatch(receiveLocation(error)),
                {enableHighAccuracy: false, timeout: 5000, maximumAge: 1000}
            );
        });

        // In a real world app, you also want to
        // catch any error in the network call.
    }
}

export const REQUEST_MERCHANTS = 'REQUEST_MERCHANTS';
let requestMerchants = createAction(REQUEST_MERCHANTS);
export const RECEIVE_MERCHANTS = 'RECEIVE_MERCHANTS';
let receiveMerchants = createAction(RECEIVE_MERCHANTS);
export function fetchMerchants() {
    return (dispatch, state) => {

        // First dispatch: the app state is updated to inform
        // that the API call is starting.

        dispatch(requestMerchants());

        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.

        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.

        return fetch('https://integration.springrewards.com/consumer_api/v2/merchants?channel=mobile&page=0&market_id=28946')
            .then(response => response.json())
            .then(json => {
                    // We can dispatch many times!
                    // Here, we update the app state with the results of the API call.
                    json.enrollments = state.enrollments;
                    dispatch(receiveMerchants(json));
                }
            );

        // In a real world app, you also want to
        // catch any error in the network call.
    }
}

export const REQUEST_ENROLLMENTS = 'REQUEST_ENROLLMENTS';
let requestEnrollments = createAction(REQUEST_ENROLLMENTS);
export const RECEIVE_ENROLLMENTS = 'RECEIVE_ENROLLMENTS';
let receiveEnrollments = createAction(RECEIVE_ENROLLMENTS);
export function fetchEnrollments() {
    return dispatch => {

        // First dispatch: the app state is updated to inform
        // 1*866*389*1969
        // that the API call is starting.

        dispatch(requestEnrollments());

        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.

        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.

        return fetch('https://integration.springrewards.com/consumer_api/v2/consumers/30900/enrollments', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic amJ1cmljaEBnbWFpbC5jb206cGFzc3dvcmQ='
            }
        })
            .then(response => {
                if(response.status !== 200 ) {
                    throw new Error(response.statusText || response.status);
                } else {
                    return response.json();
                }
            })
            .then(json => dispatch(receiveEnrollments(json)))
            .catch(response => dispatch(receiveEnrollments(response)))
    }
}

