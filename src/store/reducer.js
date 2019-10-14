const defaultState = {
	navState:'index'
};

export default (state = defaultState, action) => {
	if (action.type === 'change_nav_state') {
		let newState = JSON.parse(JSON.stringify(state));
		newState.navState = action.value;
		return newState;
	}
	return state
}