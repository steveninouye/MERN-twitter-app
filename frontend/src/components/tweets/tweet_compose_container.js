import { connect } from 'react-redux';
import { composeTweet } from '../../actions/tweet_actions';
import TweetCompose from './tweet_compose';

const mstp = state => {
  return {
    currentUser: state.session.user,
    newTweet: state.tweets.new
  };
};

const mdtp = dispatch => {
  return {
    composeTweet: data => dispatch(composeTweet(data))
  };
};

export default connect(mstp, mdtp)(TweetCompose);