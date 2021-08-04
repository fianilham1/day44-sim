const defaultState = {
    userList:[
        {
            name:"fian",
            username:"fian1@gmail.com",
            password:"fian123@"
        }
    ]
}

const addUser = newUser => {
    const userList = defaultState.userList
    userList.push(newUser)
}

const userListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SIGNUP_OK":
            addUser(action.payload.user)
            return state
        default:
            return state
    }
}

export default userListReducer