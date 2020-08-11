import { createSelector } from "reselect";

const selectSignInAndSignUp = (state) => state.signInAndSignUp;

export const selectIsSignIn = createSelector(
  [selectSignInAndSignUp],
  (signInAndSignUp) => signInAndSignUp.isSignIn
);
