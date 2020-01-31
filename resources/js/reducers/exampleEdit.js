import * as Types from './../constants/ActionType';
var initialState = {};

const exampleEdit = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_EXAMPLE:
            return action.example;
        default :
            return state;
    }
}

export default exampleEdit;
