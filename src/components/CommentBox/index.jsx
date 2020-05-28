import React, { Component } from "react";
import { connect } from "react-redux";
import { saveComment ,fetchComments} from "actions/index";

class CommmentBox extends Component {
  state = { comment: "" };
  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Save the comment using action creator

    this.props.saveComment(this.state.comment);

    //clear the comment Box
    this.setState({ comment: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Sumbit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}
export default connect(null, { saveComment,fetchComments })(CommmentBox);
