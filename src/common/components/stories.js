import React from 'react';
import { View, FlatList, RefreshControl, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Headline from 'common/components/headline';
import Story from 'common/components/story';
import { mapScreenPropsToProps } from 'common/navigation';

class Headlines extends React.Component {
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
      <View style={styles.stories}>
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

const Stories = StackNavigator(
  {
    Home: {
      screen: mapScreenPropsToProps(Headlines),
    },
    Details: {
      screen: Story,
    },
  },
  { headerMode: 'none' }
);

export default Stories;

const styles = StyleSheet.create({
  stories: {
    backgroundColor: '#F6F6EF',
  },
});
