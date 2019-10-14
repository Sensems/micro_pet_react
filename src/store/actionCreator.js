import actionTypes from './ActionTypes'

const actionCreator = {
	addData: (value) => ({
		type: actionTypes.ADD_DATA,
		value: value
	}),
	changeNavState: (value) => ({
		type: actionTypes.CHANGE_NAV_STATE,
		value: value
	})
};

export default actionCreator;