import { createAction } from 'redux-actions';

export const INCREMENT = 'INCREMENT';
export const increment = createAction(INCREMENT);

export const DECREMENT = 'DECREMENT';
export const decrement = createAction(DECREMENT);

export const REQUEST_MERCHANTS = 'REQUEST_MERCHANTS';
let requestMerchants = createAction(REQUEST_MERCHANTS);
export const RECEIVE_MERCHANTS = 'RECEIVE_MERCHANTS';
let receiveMerchants = createAction(RECEIVE_MERCHANTS);
export function fetchMerchants() {
    return dispatch => {

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

                    dispatch(receiveMerchants(json));
                }
            );

        // In a real world app, you also want to
        // catch any error in the network call.
    }
}