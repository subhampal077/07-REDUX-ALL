const logger = (store) => (next) => (action) => {
  // console.log("STORE:", store);
  // console.log("NEXT:", next);
  // console.log("ACTION:", action);
  console.log("LOGGER MIDDLEWARE ACTIVE JUST FOR DEMO");
  return next(action);
};

export default logger;
