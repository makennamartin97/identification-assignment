import React, {Component} from 'react';


class PersonCard extends Component {
    render() {
      return (
        <>
        <li className="list-group-item">
          {this.props.lastName} , {this.props.firstName}
        </li>
        <li className="list-group-item">
          Age: {this.props.age}
        </li>
        <li className="list-group-item">
          Hair Color: {this.props.hairColor}
        </li>
  
        </>
      );
    }
  }



export default PersonCard;