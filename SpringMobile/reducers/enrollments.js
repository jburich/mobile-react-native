var handleActions = require('redux-actions').handleActions;

export default handleActions({
        REQUEST_ENROLLMENTS: (state, action) => ({
            isLoading: true,
            items: state.items
        }),

        RECEIVE_ENROLLMENTS: (state, action) => {
            if ( action.error ) {
                return state;
            } else {
                return {
                    isLoading: false,
                    items: action.payload
                };
            }
        }
    },
    {
        isLoading: false,
        items: []
    }
);