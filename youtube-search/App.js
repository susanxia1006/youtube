import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import { SearchBar } from './src/components';

export default class App extends Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <Header

          centerComponent={{ text: 'Youtube Search', style: { color: '#fff' } }}
          outerContainerStyles={{ backgroundColor: '#E62117' }}

        />
      <SearchBar />
      {/*List of videos*/}

      </View>
    );
  }
}
