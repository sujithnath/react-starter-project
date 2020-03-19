import { DUMMY_BEGIN, DUMMY_SUCCESS, DUMMY_ERROR } from "../constants";

const dummyReducer = (state = [], action) => {
  switch (action.type) {
    case DUMMY_BEGIN:
      return [];

    case DUMMY_SUCCESS:
      return [...action.payload];

    case DUMMY_ERROR:
      return [];
    default:
      return state;
  }
};

export default dummyReducer;
