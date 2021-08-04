const defaultState = {
    statusLogin: false,
    username: ""
}

const authReducer = (state = defaultState, action) => {
    console.log("state:", state);
    console.log("action:", action.payload);
    switch (action.type) {
        case "LOGIN_OK":
            return {
                ...state,
                username: action.payload.user,
                statusLogin: true,
            }
        case "LOGOUT":
            return defaultState
        default:
            return state
    }
}

export default authReducer