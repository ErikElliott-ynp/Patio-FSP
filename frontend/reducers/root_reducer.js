import { combineReducers } from "redux";

import ErrorsReducer from "./errors_reducer";
import EntitiesReducer from "./entities_reducer";
import SessionReducer from "./session_reducer";
import uiReducder from "./ui_reducer";

const RootReducer = combineReducers({
    entities: EntitiesReducer,
    session: SessionReducer,
    errors: ErrorsReducer,
    ui: uiReducder
})

export default RootReducer;