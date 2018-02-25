import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Colors from '../Colors';

export default class HomeTab extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hooray! Your smart home devices are being secured</Text>
        <Text style={styles.textSmall}>Last threat scan: 0800 GMT +8 at 1/2/2018</Text>
        <Text style={styles.textSmall}>Smart Home Devices Status: <Text style={styles.status}>Protected</Text> </Text>
        <Button style={styles.button}
          onPress={this._onPressButton}
          title="DO A QUICK SCAN NOW"
          color="#22f6e8"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 40,
    marginRight: 40,
  },
  text: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 24,
    marginTop: 24,
    fontFamily: 'sourceSansProLight',
  },
  textSmall: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 24,
    fontFamily: 'sourceSansProLight',
  },
  status: {
    color: Colors.TOOLBAR_GRADIENT_COLOR_START,
    fontSize: 16,
    fontFamily: 'sourceSansProBold',
  }

});
