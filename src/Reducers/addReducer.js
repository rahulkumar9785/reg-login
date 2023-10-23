const addReducer = (state = [], action) => {
  switch (action.type) {
    case "addtolist":
      state = [...state, action.payload.data];
      console.log("state", state);

      return state;

    case "updateUser":
      console.log(state);
      console.log(action.payload.data);
      state.map((data) => {
        if (data.id === action.payload.data.id) {
          data.name = action.payload.data.name;
          data.age = action.payload.data.age;
          data.gender = action.payload.data.gender;
          data.department = action.payload.data.department;
        }
      });
      return state;

    default:
      return state;
  }
};
export default addReducer;
