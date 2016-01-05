import { handleActions } from 'redux-actions'

export default handleActions({
        INCREMENT: (state, action) => ({
            counter: state.counter + action.payload
        }),

        DECREMENT: (state, action) => ({
            counter: state.counter - action.payload
        })
    },
    {
        counter: 0
    }
);