import {AUTH_USER} from '../actions/types';

const initialState = {
  name: '',
};
export default function(state: State = initialState, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, logIn: action.payload };
    default:
  }

  return state;
}
