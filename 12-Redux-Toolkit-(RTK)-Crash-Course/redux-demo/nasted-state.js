const { produce, Immer } = require("immer");
const { createStore } = require("redux");

const initialState = {
  name: "Subham",
  address: {
    pin: 100123,
    city: "Coochbehar",
    state: "W.B",
  },
};

const UPDATE_PIN = "UPDATE_PIN";

const updatePin = (pin) => {
  return {
    type: UPDATE_PIN,
    payload: pin,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PIN:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       pin: action.payload,
      //     },
      //   };
      return produce(state, (copyState) => {
        copyState.address.pin = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial state:", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state:", store.getState())
);

store.dispatch(updatePin(736101));
unsubscribe();
console.log(initialState);
