import { combineReducers } from 'redux';
import examples from './examples';
import exampleEdit from './exampleEdit';

const appReducers = combineReducers({
    examples,
    exampleEdit
});

export default appReducers;
