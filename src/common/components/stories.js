import React from 'react';
import { View, FlatList, RefreshControl } from 'react-native';

import Headline from 'common/components/headline';

class Stories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { refreshing: false };
    this._onRefresh = this._onRefresh.bind(this);
  }
  componentDidMount() {
    this.props.fetchStories();
  }

  _onRefresh() {
    this.setState({ refreshing: true });
    this.props.fetchStories();
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
          data={this.props.stories}
          renderItem={({ item }) => <Headline {...item} />}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

export default Stories;
