const defaultState = {
    users:[
        {
            name:"fian",
            username:"fian1@gmail.com",
            password:"fian123@",
            role:"Admin"
        },
        {
            name:"ridhwan",
            username:"rid@gmail.com",
            password:"rid123@",
            role:"Mahasiswa"   
        }
    ]
}

const addUser = newUser => {
    const userList = defaultState.users
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