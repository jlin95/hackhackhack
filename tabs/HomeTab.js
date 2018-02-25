import React from 'react';
import { StyleSheet, View, Text, Button, Image, Alert } from 'react-native';
import Colors from '../Colors';

export default class HomeTab extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/img/group313.png')}
            />
        <Text style={styles.text}>Hooray! Your smart home devices are being secured</Text>
        <Text style={styles.textSmall}>Last threat scan: 0800 GMT +8 at 1/2/2018</Text>
        <Text style={[styles.textSmall, styles.bottomGap]}>Smart Home Devices Status: <Text style={styles.status}>Protected</Text> </Text>
        <Button style={styles.button}
          onPress={() => { Alert.alert('You tapped the button!');}}
          title="DO A QUICK SCAN NOW"
          //color="#22f6e8"
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
  image: {
    height: 200,
    width: 272,
    alignContent: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#22f6e8',
  },
  text: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 18,
    marginBottom: 18,
    fontFamily: 'sourceSansProLight',
  },
  textSmall: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 3,
    fontFamily: 'sourceSansProLight',
  },
  bottomGap: {
    marginBottom: 15,
  },
  status: {
    color: Colors.STATUS_BAR_COLOR,
    fontSize: 12,
    fontFamily: 'sourceSansProBold',
  }

});
