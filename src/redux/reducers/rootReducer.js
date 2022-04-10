// ** import combine to make combine for all reduces
import { combineReducers } from "redux";

// ** import reducers
import counterReducer from "./counter";

// ** combine all reducers in root reducer
const rootReducer = combineReducers({
    counterReducer
})

export default rootReducer