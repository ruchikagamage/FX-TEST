import React, { Component } from 'react'
import { connect } from "react-redux";
import * as loginActions from '../../actions/authentication';
import { browserHistory } from 'react-router';
import {NotificationContainer, NotificationManager} from 'react-notifications';
var md5 = require('md5');

class LoginCustomForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email:null,
      password:null,
      buttonState:true,
    };
    localStorage.setItem('token', 'logout');
  }

  logInAction(){
    if (this.state.email && this.state.password) {
      this.setState({buttonState: false});
      if (this.state.buttonState ) {
        this.props.login({email:this.state.email,password:md5(this.state.password)});
      }

    }
    else {
      console.log('dsdsss');
      if (!this.state.email && !this.state.password) {
        NotificationManager.error('Email & Password cannot be empty!','Error', 5000, () => {
          alert('callback');
        });
      }
      else if (!this.state.email) {
        NotificationManager.error('Email cannot be empty','Error', 5000, () => {
          alert('callback');
        });
      }else if (!this.state.password) {
        NotificationManager.error('Password cannot be empty','Error', 5000, () => {
          alert('callback');
        });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loginStatus) {
      if (nextProps.loginStatus.success === true) {
          browserHistory.push('/home');
      }
      else {
        NotificationManager.error('Invalid Credentials','Error', 5000, () => {
          alert('callback');
        });
        this.setState({buttonState:true});
      }
    }
  }

  render() {
      return (
        <div>
          <form className="form-signin" >
              <h2 className="form-signin-heading">Please login</h2>
              <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Address"
                    onChange={(e) => this.setState({email: e.target.value})}
                  />
              </div>
              <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => this.setState({password: e.target.value})}
                  />
              </div>
              <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.logInAction.bind(this)}><i className={this.state.buttonState ? "scc" : "fa fa-spinner fa-spin"}></i> Sign In</button>
          </form>
          <NotificationContainer/>
        </div>
      )
  }
}

function bindActions(dispatch) {
  return {
    login: data => dispatch(loginActions.signinUser(data)),
  };
}


function mapStateToProps(state) {
  return {loginStatus:state.authentication.logIn};
}

export default connect(mapStateToProps, bindActions)(LoginCustomForm);
