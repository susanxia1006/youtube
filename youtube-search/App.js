import React, { Component } from 'react';
import { View } from 'react-native';
//import { Header } from 'react-native-elements';
import { SearchBar, AppHeader } from './src/components';

export default class App extends Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <AppHeader headerText='Youtube Search' />
        <SearchBar />
      {/*List of videos*/}

      </View>
    );
  }
}
