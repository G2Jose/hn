import React from 'react';
import { connect } from 'react-redux';
import { View, FlatList, RefreshControl } from 'react-native';
import { Icon } from 'react-native-elements';

import Headline from 'common/components/headline';

import { fetchTopStories } from 'top/top.actions';

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = { refreshing: false };
    this._onRefresh = this._onRefresh.bind(this);
  }
  componentDidMount() {
    this.props.fetchTopStories();
  }

  _onRefresh() {
    this.setState({ refreshing: true });
    this.props.fetchTopStories();
    this.setState({ refreshing: false });
  }

  render() {
    return (
      <View>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
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
