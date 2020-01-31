import * as Types from './../constants/ActionType';
import callApi from './../utils/apiCaller';
import * as config from './../constants/Config';
import axios from 'axios';

//fetch action
export const fetchExampleRequest = () => {
    return (dispatch) => {
        return callApi('examples', 'GET', null).then(res => {
            // console.log(res.data.data)
            dispatch(fetchExample(res.data.data.data));
        });
    }
}

export const fetchExample = (examples) => {
    return {
        type: Types.FETCH_EXAMPLE,
        examples
    }
}

//search action
export const searchExampleRequest = (keywork) => {
    return (dispatch) => {
        return axios.get(config.API_URL + '/example/search', {params: {keywork: keywork}}).then(res => {
            dispatch(searchExample(res.data));
        })
    }
}

export const searchExample = (examples) => {
    return {
        type: Types.SEARCH_EXAMPLE,
        examples
    }
}

//filter action
export const filterExampleRequest = (value) => {
    return (dispatch) => {
        return axios.get(config.API_URL + '/example/filter', {params: {value: value}}).then(res => {
            dispatch(filterExample(res.data));
        })
    }
}

export const filterExample = (examples) => {
    return {
        type: Types.FILTER_EXAMPLE,
        examples
    }
}

//add action
export const addExampleRequest = (example) => {
    return (dispatch) => {
        return callApi('examples', 'POST', example).then(res => {
            dispatch(addExample(res.data));
        });
    }
}

export const addExample = (example) => {
    return {
        type: Types.ADD_EXAMPLE,
        example
    }
}

//get edit action
export const getExampleToEditRequest = (id) => {
    return dispatch => {
        return callApi(`examples/${id}`, 'GET', null).then(res => {
            dispatch(getExampleToEdit(res.data))
        });
    }
}

export const getExampleToEdit = (example) => {
    return {
        type : Types.EDIT_EXAMPLE,
        example
    }
}

//update action
export const updateExampleRequest = (example) => {
    return (dispatch) => {
        return callApi(`examples/${example.id}`, 'POST', example).then(res => {
            if (res) {
                dispatch(updateExample(res.data));
            }
        });
    }
}

export const updateExample = (example) => {
    return {
        type: Types.UPDATE_EXAMPLE,
        example
    }
}

//delete action
export const deleteExampleRequest = (id) => {
    return (dispatch) => {
        return callApi(`examples/${id}`, 'DELETE', null).then(res => {
            dispatch(deleteExample(id));
        });
    }
}

export const deleteExample = (id) => {
    return {
        type: Types.DELETE_EXAMPLE,
        id
    }
}
