import axios from 'axios';
import { ROOT_URL } from '../helpers/config';
import { AUTH_USER } from './types';

//user loging function
export function signinUser(userCredentials) {
  var email = userCredentials.email;
  var password = userCredentials.password;
  return function (dispatch) {
    axios.post(`${ROOT_URL}/login`, { email , password })
      .then(response => { 
        if (response.data.success === true) {
           localStorage.setItem('token', response.data.data.TOKEN);
           dispatch({ type: AUTH_USER, payload:response.data});
        }
        else {
          dispatch({ type: AUTH_USER, payload:response.data});
        }
    }).catch(response =>{
      dispatch({ type: AUTH_USER, payload:[]});
    });
  }
}
