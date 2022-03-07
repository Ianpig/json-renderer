import data from "../data";

const UPDATE = "UPDATE";

export const initialState = { data };

const codeReducer = (state = { initialState: 2321 }, action) => {
  console.log(action);
  switch (action.type) {
    case UPDATE:
      return action.payload;
    default:
      return state;
  }
};

export default codeReducer;
