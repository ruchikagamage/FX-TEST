import axios from 'axios';
import { ROOT_URL } from '../helpers/config';
import { UPLOAD_SUCCESS,UPLOAD_ERROR,IMAGE_LIST_DATA } from './types';


export function uploadImage(result){

  var config = {
    headers: {'authorization': result.token,'org_uuid':'58f8a1e533a5b79d1b19ed83'}
  };
  console.log('config ',config);
  //get email address from localstorge
  var inspectionId = result.inspectionId;
  var activityId = result.activityId;
  var data = result.data;

  return function (dispatch) {
    axios.post(`${ROOT_URL}/uploadActivityComment`, { inspectionId ,activityId, data },config)
      .then(response => {
        if (response.data.success === true) {
          dispatch({ type: UPLOAD_SUCCESS, payload:response.data});
        }
        else { 
          dispatch({ type: UPLOAD_ERROR, payload:response.data});
        }
    });

  }
}

export function getUploadedImageList(result){

  var token ='';

  return function (dispatch) {
    var config = {
          headers: {'authorization': localStorage.getItem('token'),'org_uuid':'58f8a1e533a5b79d1b19ed83'}
        };

      var inspectionId = result.inspectionId;
      var activityId = result.activityId;
      console.log('inspectionId ',inspectionId,'activityId ',activityId);
      axios.get(`${ROOT_URL}/getActivityComments/`+inspectionId+'/'+activityId ,config)
      .then(response => {
        if (response.data.success === true) {
          dispatch({ type: IMAGE_LIST_DATA, payload:response.data});
        }
        else {
          dispatch({ type: IMAGE_LIST_DATA, payload:response.data});
        }
      });

  }
}
