import actionTypes from './ActionTypes'

const actionCreator = {
    addData: (value) => ({
        type: actionTypes.ADD_DATA,
        value:value
    })
};

export default actionCreator;