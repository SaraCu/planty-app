import { combineReducers } from "redux";
import { signInAndSignUpReducer } from "./sign-in-and-sign-up/sign-in-and-sign-up.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

const rootReducer = combineReducers({
  user: userReducer,
  signInAndSignUp: signInAndSignUpReducer,
});

export default persistReducer(persistConfig, rootReducer);
