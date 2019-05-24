const store = (next: any, action: any) => {
  console.log(action);
  return next(action)
};

export default store;