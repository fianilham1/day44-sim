
// const getAPI = () => {
    // const urlFetch = fetch('http://localhost:3000/posts') 
    // urlFetch.then( res => {
    //   if(res.status === 200)
    //       return res.json()   
    // }).then( resJson => {
    //     // console.log("JSONDATA:",resJson)
    
    // }).catch(() => console.log("Error api"))
//   }


const defaultState={
    users:[],
    serviceStatus:'',
    loadingStatus:true
}


const getUsers = () => {
    const urlFetch = fetch('http://localhost:8080/api/getUsers') 
        urlFetch.then( res => {
        if(res.status === 200)
            return res.json()   
        }).then( resJson => {
            if(resJson && resJson.length!==0){
                const userList = defaultState.users
                userList.length=0
                resJson.map((data,index)=>{
                    console.log("JSONDATA:",data)
                    userList.push(data)
                })
                defaultState.serviceStatus="doGet"
                console.log("Success Get All Users:")
                return resJson
            }
        })
        .catch(() => console.log("Error api"))
        .finally(() => {
            console.log("finally")
        })
}

const addUser = newUser => {
    fetch('http://localhost:8080/api/register', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json'  
    },
    body: JSON.stringify(newUser),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        defaultState.serviceStatus="doAdd"
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

const saveUser = updatedUser => {
    const userList = defaultState.users
    const idxUser = userList.map(user => user.id).indexOf(updatedUser.id)
    const newUser = {
        ...userList[idxUser], //to add role
        ...updatedUser
    }
    fetch('http://localhost:8080/api/updateUser', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json'  
        },
        body: JSON.stringify(newUser),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            defaultState.serviceStatus="doEdit"
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

const deleteUser = deletedUser => {
    fetch('http://localhost:8080/api/deleteUser', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json'  
        },
        body: JSON.stringify(deletedUser),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            defaultState.serviceStatus="doDelete"
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

const userListReducer = (state = defaultState, action) => {
    console.log("cekstate",state)
    switch (action.type) {
        case "GETALLUSERS":
            getUsers()
            return state
        case "SIGNUP_OK":
            addUser(action.payload.user)
            return state
        case "EDIT_USER":
            saveUser(action.payload.user)
            return state
        case "DELETE_USER":
            deleteUser(action.payload.idUser)
            return state
        default:
            return state
    }
}

export default userListReducer