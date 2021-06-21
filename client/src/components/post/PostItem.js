import React, { Fragment } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { addLike, deletePost, removeLike } from "../../actions/post";

const PostItem = ({
  auth,
  addLike,
  removeLike,
  deletePost,
  showActions,
  post: { _id, likes, comments, text, name, avatar, user, date },
}) => {
  return (
    <div className="posts">
      <div className="post bg-white my-1">
        <div>
          <Link to={`/profile/${user}`}>
            <img className="rounded my-1" src={avatar} alt="avatar" />
            <h4>{name}</h4>
          </Link>
        </div>
        <div>
          <p className="my-1">{text}</p>

          <p className="post-date my-1">
            Posted On : <Moment format="DD/MM/YYYY">{date}</Moment>
          </p>

          {showActions && (
            <Fragment>
              <button
                className="btn"
                type="button"
                onClick={(e) => addLike(_id)}
              >
                <i className="fas fa-thumbs-up"></i>
                {likes.length > 0 && <span> {likes.length}</span>}
              </button>
              <button
                className="btn"
                type="button"
                onClick={(e) => removeLike(_id)}
              >
                <i className="fas fa-thumbs-down"></i>
              </button>
              <Link to={`/posts/${_id}`} className="btn btn-primary">
                {" "}
                Discussion
                {comments.length > 0 && <span> {comments.length}</span>}
              </Link>
              {!auth.loading && user === auth.user._id && (
                <button
                  className="btn btn-danger"
                  onClick={(e) => deletePost(_id)}
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};
PostItem.defaultProps = {
  showActions: true,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
