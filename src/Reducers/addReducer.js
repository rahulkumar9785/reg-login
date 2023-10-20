const addReducer = (state=[], action) => {
  switch (action.type) {
    case "addtolist":
      state = [...state, action.payload.data];
      console.log("state", state);

      return state;

    default:
      return state;
  }
};
export default addReducer;
