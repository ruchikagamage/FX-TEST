import {UPLOAD_SUCCESS,UPLOAD_ERROR,IMAGE_LIST_DATA} from '../actions/types';

const initialState = {
  name: '',
};
export default function(state:State = initialState, action) {
  switch(action.type) {
    case UPLOAD_SUCCESS:
      return { ...state, uploadState: action.payload };
    case UPLOAD_ERROR:
      return { ...state, uploadState: [] };
    case IMAGE_LIST_DATA:
      return { ...state, getImageList: action.payload.data.reverse() };
    default:
  }

  return state;
}
