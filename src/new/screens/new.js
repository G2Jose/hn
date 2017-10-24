import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

class New extends React.Component {
  render() {
    return <View />;
  }
}

New.navigationOptions = {
  tabBarLabel: 'New',
  tabBarIcon: () => <Icon name="newspaper-o" type="font-awesome" />,
};

export default New;
