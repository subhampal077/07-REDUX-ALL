// curried function
const func =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === "function") {
      action(dispatch);
    } else {
      next(action);
    }
  };

// export default func;
