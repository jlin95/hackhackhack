import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Colors from '../Colors';

export default class HomeTab extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hooray! Your smart home devices are being secured</Text>
        <Text>Last threat scan: </Text>
        <Button style={styles.button}
          onPress={this._onPressButton}
          title="Learn More"
          color="#22f6e8"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
  },
  text: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 24,
    marginTop: 24,
  },

});
