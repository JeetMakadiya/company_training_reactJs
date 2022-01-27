const login = (payload) => {
  return {
    type: "LOGIN",
    payload: {
      email: payload.email,
      password: payload.password,
    },
  };
};

const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export { login, logout };
