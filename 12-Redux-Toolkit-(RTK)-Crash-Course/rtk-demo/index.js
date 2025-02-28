const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");
const { icecreamActions } = require("./features/icecream/icereamSlice");
const { fetchUsers } = require("./features/user/userSlice");

console.log("InitialState:", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("UpdatedState:", store.getState());
});

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restock(3));

// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restock(3));

store.dispatch(fetchUsers());
// unsubscribe();
