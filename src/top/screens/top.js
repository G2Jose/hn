import React from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import Headline from 'common/components/headline';

import { fetchTopStories } from 'top/top.actions';

class Top extends React.Component {
  componentDidMount() {
    this.props.fetchTopStories();
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.props.topStories}
          renderItem={({ item }) => <Headline {...item} />}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

Top.navigationOptions = {
  tabBarLabel: 'Top',
  tabBarIcon: () => <Icon name="chevron-up" type="font-awesome" />,
};

const mapStateToProps = state => ({
  topStories: state.topStories,
});

const mapDispatchToProps = dispatch => ({
  fetchTopStories: () => {
    dispatch(fetchTopStories());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Top);
