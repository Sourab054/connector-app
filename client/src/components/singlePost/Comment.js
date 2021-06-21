import React, { useState } from "react";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

const Comment = ({ postId, addComment }) => {
  const [text, setText] = useState("");
  return (
    <div className="post-form">
      <div className="post-form-header bg-primary">
        <h3>Leave a comment...</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          addComment({ text }, postId);
          setText("");
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <input type="submit" value="Submit" className="btn btn-dark my-1" />
      </form>
    </div>
  );
};

export default connect(null, { addComment })(Comment);
