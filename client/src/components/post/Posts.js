import React, { useEffect, Fragment } from "react";
import { getPosts } from "../../actions/post";
import { connect } from "react-redux";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <Fragment>
      <h1 className="text-primary l">Posts</h1>
      <p className="para">
        <i className="fas fa-user-friends"></i> Welcome to the community
      </p>
      <PostForm />
      <div className="posts">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getPosts })(Posts);
