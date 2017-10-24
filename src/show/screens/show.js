import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

class Show extends React.Component {
  render() {
    return <View />;
  }
}

Show.navigationOptions = {
  tabBarLabel: 'Show',
  tabBarIcon: () => <Icon name="play" type="font-awesome" />,
};

export default Show;
