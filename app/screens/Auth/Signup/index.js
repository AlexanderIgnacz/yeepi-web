import React, {Component} from 'react';
import './styles.css';

export default class Signup extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.context.router.push({pathname: `/${this._input.value}`});
  }

  render() {
    return (
      <div>
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

          <ol className="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            <li data-target="#carousel-example-generic" data-slide-to="3"></li>
            <li data-target="#carousel-example-generic" data-slide-to="4"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src={'/assets/res/signup_left_back.png'}>
            </div>
            <div className="item">
              <img src={'/assets/res/signup_left_back.png'}>
            </div>
            <div className="item">
              <img src={'/assets/res/signup_left_back.png'}>
            </div>
            <div className="item">
              <img src={'/assets/res/signup_left_back.png'}>
            </div>
            <div className="item">
              <img src={'/assets/res/signup_left_back.png'}>
            </div>
          </div>

          <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

Signup.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
