import React from 'react';
import { connect } from 'react-redux';

import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import { fetchTopStories } from 'top/top.actions';

class Top extends React.Component {
  componentDidMount() {
    this.props.fetchTopStories();
  }
  render() {
    return <View />;
  }
}

Top.navigationOptions = {
  tabBarLabel: 'Top',
  tabBarIcon: () => <Icon name="chevron-up" type="font-awesome" />,
};

const mapDispatchToProps = dispatch => ({
  fetchTopStories: () => {
    dispatch(fetchTopStories());
  },
});

export default connect(null, mapDispatchToProps)(Top);
