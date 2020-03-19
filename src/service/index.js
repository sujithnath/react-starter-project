import axios from 'axios';

export const getRequest = async url => {
  try {
    return await axios.get(url);
  } catch (error) {
    return error;
  }
};
