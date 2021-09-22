import { combineReducers } from "redux";
import {ContactList} from "./contactdetails";


const rootReducer = combineReducers({  //combineReducers redux function which combines all redusers
  contacts: ContactList
});

export default rootReducer;
