const defaultState = {
    username: 'sensems',
    list: ['1111','2222','3333','4444']
};

export default (state = defaultState, action) => {
    if(action.type === 'add_data') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.username = action.value;
        return newState;
    }
    return state
}