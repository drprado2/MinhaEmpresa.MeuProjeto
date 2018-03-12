import React, { Component } from 'react'

import './flex-container.css';

class FlexContainer extends Component{
  constructor(props){
    super(props);
  }

  render(){

    return (

      <div className="flex-container">
        {this.props.children}
      </div>
    )
  }
}
