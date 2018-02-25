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
        <Text style={styles.textSmall}>Smart Home Devices Status: <Text style={styles.status}>Protected</Text> </Text>
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
    marginTop: 40,
  },
  button: {

    backgroundColor: '#22f6e8',
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
