import { combineReducers } from "redux";
import mainReducer from "../web3Modal/reducer";

// NOTE 1: DO NOT CHANGE the 'reducerMap' name and the declaration pattern.
// This is used for Rekit cmds to register new features, remove features, etc.
// NOTE 2: always use the camel case of the feature folder name as the store branch name
// So that it's easy for others to understand it and Rekit could manage them.

const reducerMap = {
  main: mainReducer
};

export default combineReducers(reducerMap);
