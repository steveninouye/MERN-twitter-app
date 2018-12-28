import { connect } from 'react-redux';
import { fetchTweets } from '../../actions/tweet_actions';
import Tweets from './tweets';

const mstp = state => {
  return {
    tweets: Object.values(state.tweets.all)
  };
};

const mdtp = dispatch => {
  return {
    fetchTweets: () => dispatch(fetchTweets())
  };
};

export default connect(mstp, mdtp)(Tweets);