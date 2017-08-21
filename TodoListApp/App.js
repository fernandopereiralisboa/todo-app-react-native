import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Todo from './components/todo/todo'
import About from './components/about/about'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Todo />
        <About />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
