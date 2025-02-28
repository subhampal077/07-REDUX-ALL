import { createStore } from "redux";

const postCounter = document.querySelector(".post-count");
const addBtn = document.querySelector(".add-btn");

const initialState = {
  post: 0,
  name: "Subham",
  age: 25,
};

const INCREMENT = "post/increment";
const DECREMENT = "post/decrement";
const INCREMENT_BY = "post/increment by";
const DECREMENT_BY = "post/decrement by";

function reducer(state = initialState, action) {
  // console.log(action);

  switch (action.type) {
    case INCREMENT:
      return { ...state, post: state.post + 1 };
    case DECREMENT:
      return { ...state, post: state.post - 1 };
    case INCREMENT_BY:
      return { ...state, post: state.post + action.payload };
    case DECREMENT_BY:
      return { ...state, post: state.post - action.payload };
    default:
      return state;
  }
  // if (action.type === INCREMENT) {
  //   return { ...state, post: state.post + 1 };
  // } else if (action.type === DECREMENT) {
  //   return { ...state, post: state.post - 1 };
  // } else if (action.type === INCREMENT_BY) {
  //   return { ...state, post: state.post + action.payload };
  // } else if (action.type === DECREMENT_BY) {
  //   return { ...state, post: state.post - action.payload };
  // }
  // return state;
}

console.dir(createStore);

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.()); // optional chaining the redux dev tool extension and call it

console.dir(store);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
  postCounter.innerText = store.getState().post;
});

addBtn.addEventListener("click", () => {
  store.dispatch({ type: INCREMENT });
});

postCounter.innerText = store.getState().post;

// console.log(store.getState());
store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });
store.dispatch({ type: INCREMENT_BY, payload: 10 });
store.dispatch({ type: DECREMENT_BY, payload: 5 });

// unsubscribe();

//===============++++++++++++++================//

// let action = {
//   type: "post/increase",
// };

// what redux will do //

// console.log("initialState:", initialState);

// initialState = reducer(initialState, { type: "post/increase" });
// console.log("initialState:", initialState);

// initialState = reducer(initialState, { type: "post/increase" });
// console.log("initialState:", initialState);

// initialState = reducer(initialState, { type: "post/decrement" });
// console.log("initialState:", initialState);

// initialState = reducer(initialState, { type: "post/increment by", payload: 5 });
// console.log("initialState:", initialState);

// initialState = reducer(initialState, { type: "post/increment by", payload: 10 });
// console.log("initialState:", initialState);
