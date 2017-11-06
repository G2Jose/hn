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
    this.props.fetchComments();
  }

  _onRefresh() {
    this.setState({ refreshing: true });
    this.props.fetchComments();
    this.setState({ refreshing: false });
  }

  render() {
    const { story } = this.props;
    return (
      <View>
        <Headline />
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
          data={story.children}
          renderItem={({ item }) => <Headline {...item} />}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

export default Stories;
