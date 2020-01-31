import * as Types from './../constants/ActionType';

var initialState = [];

const examples = (state = initialState, action) => {
    var { example, id } = action;
    var index = -1;
    switch (action.type) {
        case Types.FETCH_EXAMPLE:
            return [...action.examples];
        case Types.SEARCH_EXAMPLE:
            return [...action.examples];
        case Types.FILTER_EXAMPLE:
            return [...action.examples];
        case Types.ADD_EXAMPLE:
            state.push(example);
            return [...state];
        case Types.UPDATE_EXAMPLE:
            index = findIndex(state, example.id);
            state[index] = example;
            return [...state];
        case Types.DELETE_EXAMPLE:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        default: return [...state];
    }
};

var findIndex = (examples, id) => {
    var result = -1;
    examples.forEach((example, index) => {
        if (example.id === id) {
            result = index;
        }
    });
    return result;
}

export default examples;
