import { combineReducers } from 'redux';
import authenticationReducer from './authentication_reducer';
import galleryReducer from './gallery_reducer';

const appReducer = combineReducers({
  authentication: authenticationReducer,
  gallery: galleryReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
