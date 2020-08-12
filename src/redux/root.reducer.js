import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { signInAndSignUpReducer } from "./sign-in-and-sign-up/sign-in-and-sign-up.reducer";
import userReducer from "./user/user.reducer";
import itemsReducer from "./items/items.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

const rootReducer = combineReducers({
  user: userReducer,
  signInAndSignUp: signInAndSignUpReducer,
  items: itemsReducer,
});

export default persistReducer(persistConfig, rootReducer);
