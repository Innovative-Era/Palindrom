import {TEXT,VALIDATE_PALINDROM
 } from './types';
import axios from 'axios';


export const withReduxText = text => dispatch => {
  dispatch({
    type: TEXT,
    payload: text
  });
};
export const validatePalindrom = text => dispatch => {
  axios
    .get(`http://localhost:61351/api/Validate/${text}`)
    .then(response =>
      dispatch({
        type: VALIDATE_PALINDROM,
        payload: response
      })
    )
    .catch(err => console.log(err));
};

