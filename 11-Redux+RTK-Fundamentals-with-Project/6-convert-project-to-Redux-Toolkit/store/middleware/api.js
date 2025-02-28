const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    const BASE_URL = "https://fakestoreapi.com";

    if (action.type === "api/makeCall") {
      const { url, onStart, onSuccess, onError } = action.payload;
      next(action);

      dispatch({
        type: onStart,
      });
      fetch(`${BASE_URL}/${url}`)
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: onSuccess,
            payload: data,
          });
        })
        .catch((err) => {
          dispatch({
            type: onError,
            payload: err.message,
          });
        });
    } else {
      return next(action);
    }
  };

// export default apiMiddleware;
