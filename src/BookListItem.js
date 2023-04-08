import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import CommentList from './CommentList';


class MyBookCard extends Component {
  state = {
    comments: []

  }




  render(){
  return (
   
    <Card className="col-md-4">
      <Card.Img variant="top" src={this.props.item.img} />
      <Card.Body>
        <Card.Title>{this.props.item.title}</Card.Title>
        <Card.Text>
         {this.props.item.category} - {this.props.item.price} 
          <CommentList />
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}
}
export default MyBookCard;