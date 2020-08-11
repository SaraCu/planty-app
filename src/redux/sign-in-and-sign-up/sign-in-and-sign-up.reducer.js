import { SignInAndSignUpActionTypes } from "./sign-in-and-sign-up.types";

const INITIAL_STATE = {
  isSignIn: true,
};

export const signInAndSignUpReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SignInAndSignUpActionTypes.TOGGLE_IS_SIGN_IN:
      return {
        ...state,
        isSignIn: !state.isSignIn,
      };

    default:
      return state;
  }
};
