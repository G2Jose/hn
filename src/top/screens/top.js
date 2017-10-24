import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

class Top extends React.Component {
  render() {
    return <View />;
  }
}

Top.navigationOptions = {
  tabBarLabel: 'Top',
  tabBarIcon: () => <Icon name="chevron-up" type="font-awesome" />,
};

export default Top;
