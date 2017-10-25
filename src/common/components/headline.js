import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Headline = ({ _loading, _loaded, title, date }) => {
  if (!_loading) {
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  loading: {
    backgroundColor: 'grey',
    height: 14,
  },
});

export default Headline;
