var raMock = jest.genMockFromModule('redux-actions');

raMock.handleActions.mockImplementation((actionHandlers, initialState) => {
    return actionHandlers;
});

module.exports = raMock;