import React, {Component} from 'react';
import './styles.css';

export default class Landing extends Component {

  render() {
    return (
      <div className="row landing topbar">
        <div className="col-sm-9">
        </div>
        <div className="col-sm-3">
          <div className="row">
            <div className="col-sm-3">
              <button type="button" className="btn btn-primary" onClick={this.onLogin}>Log In</button>
            </div>
            <div className="col-sm-3">
              <button type="button" className="btn btn-primary" onClick={this.onSignup}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onLogin = () => {
    
  }

  onSignup = () => {
    this.context.router.push({pathname: '/Signup'});
  }
}

Landing.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
