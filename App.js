import React from 'react';
import { StyleSheet, Dimensions, Text, View, StatusBar, ToolbarAndroid } from 'react-native';
import { LinearGradient } from 'expo';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import Colors from './Colors';

export default class App extends React.Component {
  state = {
    navigationState: {
      index: 0,
      routes: [
        { key: 'home', title: 'Home' },
        { key: 'devices', title: 'Devices' },
        { key: 'about', title: 'About' }
      ]
    }
  }

  renderScene = SceneMap({
    home: () => <View style={{ backgroundColor: '#ff4081' }} />,
    devices: () => <View style={{ backgroundColor: '#673ab7' }} />,
    about: () => <View style={{ backgroundColor: '#673ab7' }} />
  })

  renderHeader = props => <TabBar {...props} />;

  handleIndexChange(index) {
    this.setState({
      ...this.state,
      navigationState: {
        ...this.state.navigationState,
        index
      }
    });
  }

  render() {
    return (
<<<<<<< 0927f9a2fe43490286e8c5bb67c7f49e7178d092
      <View style={styles.window}>
        <StatusBar backgroundColor={Colors.STATUS_BAR_COLOR} />
        <View style={styles.container}>
          <LinearGradient
            colors={[ Colors.TOOLBAR_GRADIENT_COLOR_START, Colors.TOOLBAR_GRADIENT_COLOR_END ]}
            start={[0.0, 0.0]}
            end={[1.0, 1.0]}>
            <ToolbarAndroid
              style={styles.toolbar}
              title="Protego"
              titleColor="#fff" />
          </LinearGradient>
          <TabViewAnimated
            style={{ flex: 1 }}
            navigationState={this.state.navigationState}
            renderScene={this.renderScene}
            renderHeader={this.renderHeader}
            onIndexChange={this.handleIndexChange}
            initialLayout={{ height: 54, width: Dimensions.get('window').width }} />
          <Text>Hello world!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
=======
      <View style={styles.container}>
        <Text style={styles.baseText}>It took me one whole freaking whole day to set up React Native.</Text>
        <Button onPress={() => {Alert.alert('Please select a device to scan');}}
          title="Click to scan"/>
<<<<<<< HEAD
>>>>>>> Added button to app
=======
>>>>>>> 578017bd425fc818aaf321dde13d56b440330266
      </View>
    );
  }
}

const styles = StyleSheet.create({
  window: {
    flex: 1,
    // backgroundColor: Colors.STATUS_BAR_COLOR,
    alignItems: 'center',
  },
<<<<<<< HEAD
  container: {
    backgroundColor: '#fff',
    marginTop: 24,
    flex: 1,
    alignSelf: 'stretch',
  },
  toolbar: {
    height: 56,
    alignSelf: 'stretch',
  },
=======
>>>>>>> 578017bd425fc818aaf321dde13d56b440330266
  baseText: {
    color: 'red',
  }

});
