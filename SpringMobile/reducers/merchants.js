import { handleActions } from 'redux-actions'

export default handleActions({
        REQUEST_MERCHANTS: (state, action) => ({
            isLoading: true,
            items: state.items
        }),

        RECEIVE_MERCHANTS: (state, action) => ({
            isLoading: false,
            items: action.payload.merchants
        })
    },
    {
        isLoading: false,
        items: []
    }
);