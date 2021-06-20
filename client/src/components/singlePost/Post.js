import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Comment from "../singlePost/Comment";
import PostItem from "../post/PostItem";
import { getPost } from "../../actions/post";

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);

  return loading || post === null ? (
    <h1>No Post</h1>
  ) : (
    <Fragment>
      <PostItem post={post} showActions={false} />
      <Comment postID={post._id} />
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
