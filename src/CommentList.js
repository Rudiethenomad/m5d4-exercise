import React, { Component, Fragment } from 'react';
import { FormControl } from 'react-bootstrap';

import CommentListItem from './CommentListItem';

class CommentList extends Component {
        
    state = {
        commentFilter:""
        }
    
    render() {
        return (
          <Fragment>
            <FormControl value={this.state.commentFilter} onChange={(e) => this.setState({ commentFilter: e.currentTarget.value })}></FormControl>
          <ul>
            {this.props.comments && this.props.comments.map(comment => <CommentListItem key={comment._id} comment={comment} /> )}

          </ul>
          </Fragment>
        )
    }

}




export default CommentList;