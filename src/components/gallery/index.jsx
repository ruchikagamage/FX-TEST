import React, { Component } from 'react'
import { connect } from "react-redux";
import * as Actions from '../../actions/gallery';
import { browserHistory } from 'react-router';
import FileUploadProgress  from 'react-fileupload-progress';
import { FILE_UPLOAD_URL } from '../../helpers/config';

class galleryPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      upload:true,
      tokenId:localStorage.getItem('token'),
    };
  }


  componentWillMount() {
    if (this.state.tokenId === 'logout') {
      browserHistory.push('/');
    }
    var data = {
      inspectionId:'5a8f1455a6579f3f280d13f6',
      activityId:'58ff0e7090954af75de13f2f'
    }
    this.props.getUploadedImageList(data);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.uploadState) {
      if (!this.state.upload) {
        var data = {
          inspectionId:'5a8f1455a6579f3f280d13f6',
          activityId:'58ff0e7090954af75de13f2f'
        }
        this.props.getUploadedImageList(data);
        this.setState({upload:true});
      }

    }

    if (nextProps.getImageList) {
      this.setState({imageList:nextProps.getImageList});
    }
  }

  imageUpload(vaue){
    if (vaue.response) {

      var comment = {
        "DESCRIPTION": '',
        "ATTACHMENTS": [vaue.response],
        "EMPLOYEE_ID": '58f8a88a33a5b79d1b19edf7'
      }
      var commentOBJ = {
        inspectionId: '5a8f1455a6579f3f280d13f6',
        activityId: '58ff0e7090954af75de13f2f',
        token:localStorage.getItem('token'),
        data: comment
      }
      this.setState({upload:false});
      this.props.uploadImage(commentOBJ);
    }
  }


    render() {
        return (
          <div>
            <h2>heeee</h2>
            <div>
              <FileUploadProgress key='ex1' url={FILE_UPLOAD_URL}
                onLoad={ (e, request) => {this.imageUpload(request);}}
                onError={ (e, request) => {console.log('error', e, request);}}
                onAbort={ (e, request) => {console.log('abort', e, request);}}
                />
            </div>
          </div>
        )
    }
}


function bindAction(dispatch) {
  return {
    uploadImage: data => dispatch(Actions.uploadImage(data)),
    getUploadedImageList: data => dispatch(Actions.getUploadedImageList(data)),
  };
}

function mapStateToProps(state) {
  return {
    uploadState: state.gallery.uploadState,
    getImageList: state.gallery.getImageList,
  };
}

export default connect(mapStateToProps, bindAction)(galleryPage);
