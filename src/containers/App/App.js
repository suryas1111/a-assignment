import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import './App.scss';
import MainPage from '../../components/LandingPage/LandingPage';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';

class App extends Component {

  constructor(props) {
        super(props);
        this.state = {
          openModal:false,
        }
  }

  openContacts=()=>{
    console.log(this.props);
    this.props.history.push('/contacts');
  }


  render() {
    return (
      <div className='image'>
        <MainPage openContact={this.openContacts}/>
      </div>
    );
  }
}

App.propTypes={
  history:PropTypes.object.isRequired
}

export default withRouter(connect()(App));
