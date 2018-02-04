import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <Header

          centerComponent={{ text: 'Youtube Search', style: { color: '#fff' } }}
          outerContainerStyles={{ backgroundColor: '#E62117' }}

        />
      {/*Search bar*/}
      {/*List of videos*/}

      </View>
    );
  }
}
