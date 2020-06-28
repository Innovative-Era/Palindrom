import {
  TEXT,VALIDATE_PALINDROM,LOADING
} from '../actions/types';

const initialState = {
  text :'',
  palindrom: {},
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TEXT:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
      case LOADING:
        return {
          ...state,
          loading: true
        };
    case VALIDATE_PALINDROM:
      return {
        ...state,
        palindrom: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
