let initialState = {
  isLoggedIn: false,
  userProfile: {},
};

export const reducer = (currentState = initialState, action) => {
  if (action.type === "LOGIN") {
    return {
      isLoggedIn: true,
      userProfile: {
        email: action.payload.email,
        password: action.payload.password,
      },
    };
  }
  if (action.type === "LOGOUT") {
    return {
      isLoggedIn: false,
      userProfile: {},
    };
  }
  return currentState;
};
