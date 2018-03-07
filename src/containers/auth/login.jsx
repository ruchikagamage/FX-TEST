import React, {Component} from 'react';
import LoginForm from '../../components/login/login_form'; 

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height:0,
      width:0
    };
  }

  render() {
    return (
      <div  className="wrapper">
        <LoginForm />
      </div>
    )
  }
}

export default Login;
