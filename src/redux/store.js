import * as redux from "redux"
import { userReducer } from "./userReducer"

export const store=redux.createStore(userReducer)