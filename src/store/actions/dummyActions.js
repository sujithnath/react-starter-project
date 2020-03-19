import { DUMMY_BEGIN, DUMMY_SUCCESS, DUMMY_ERROR } from "../constants";

const dummyBegin = () => ({
  type: DUMMY_BEGIN,
  loading: true
});

const dummySuccess = payload => ({
  type: DUMMY_SUCCESS,
  payload
});

const dummyError = error => ({
  type: DUMMY_ERROR,
  error: error
});

export { dummyBegin, dummySuccess, dummyError };
