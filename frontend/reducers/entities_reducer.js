import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import PostReducer from "./posts_reducer";


const EntitiesReducer = combineReducers({
    users: UsersReducer,
    posts: PostReducer
})

export default EntitiesReducer;