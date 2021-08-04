  
import { combineReducers } from "redux"
import AuthReducer from "./auth";
import MhsListReducer from "./mhsList";
import pageConfigReducer from "./pageConfig";
import userListReducer from "./userList";

export default combineReducers({
    Auth: AuthReducer,
    MhsList: MhsListReducer,
    pageConfig: pageConfigReducer,
    UserList:userListReducer
})