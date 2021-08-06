const defaultState = {
    statusLogin: false,
    userLogin:{
        name:"",
        username: "",
        role:""
    }
   
}

const authReducer = (state = defaultState, action) => {
    console.log("state:", state);
    console.log("action:", action.payload);
    switch (action.type) {
        case "LOGIN_OK":
            return {
                ...state,
                userLogin:action.payload.user,
                statusLogin: true,
            }
        case "LOGOUT":
            return defaultState
        case "UPDATE_LOGIN_USER":
            return {
                ...state,
                userLogin:action.payload.user
            }
        default:
            return state
    }
}

export default authReducer