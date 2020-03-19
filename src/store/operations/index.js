import { getRequest } from '../../service';

import { dummyBegin, dummySuccess, dummyError } from '../actions/dummyActions';

const url = './cities.json';

function fetchData(dispatch) {
  dispatch(dummyBegin());
  getRequest(url)
    .then(res => {
      dispatch(dummySuccess(res.data));
    })
    .catch(error => {
      dispatch(dummyError(error));
    });
}

export { fetchData };
