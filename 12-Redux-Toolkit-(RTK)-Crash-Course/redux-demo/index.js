const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

// action type variable
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

// define action type & creator
function orderCake(quantity = 1) {
  return {
    type: CAKE_ORDERED,
    payload: quantity,
  };
}

function restockCake(quantity = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: quantity,
  };
}

const orderIceCream = (quantity = 1) => {
  return {
    type: ICECREAM_ORDERED,
    payload: quantity,
  };
};

const restockIceCream = (quantity = 1) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload: quantity,
  };
};

// initial state
// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

// (previousState, action) => newState
// reducer

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    case CAKE_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  Cakes: cakeReducer,
  IceCreams: iceCreamReducer,
});

// creating redux store
// const store = createStore(rootReducer, applyMiddleware(logger));

const store = createStore(rootReducer);

// console.log(store);
console.log("InitialState =", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state =", store.getState())
);

store.dispatch(orderCake()); // passing action creator in dispatch method
store.dispatch(orderCake(2));
store.dispatch(restockCake(3));

store.dispatch(orderIceCream(2));
store.dispatch(orderIceCream(3));
store.dispatch(restockIceCream(5));

unsubscribe();
