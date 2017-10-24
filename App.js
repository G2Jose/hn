import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Top from 'top/screens/top';
import New from 'new/screens/new';
import Show from 'show/screens/show';
import Ask from 'ask/screens/ask';
import Jobs from 'jobs/screens/jobs';

const App = TabNavigator(
  {
    Top: {
      screen: Top,
    },
    New: {
      screen: New,
    },
    Show: {
      screen: Show,
    },
    Ask: {
      screen: Ask,
    },
    Jobs: {
      screen: Jobs,
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
