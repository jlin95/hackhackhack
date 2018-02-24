import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>It took me one whole freaking whole day to set up React Native.</Text>
        <Button onPress={() => {Alert.alert('Please select a device to scan');}}
          title="Click to scan"/>
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
  baseText: {
    color: 'red',
  }

});
