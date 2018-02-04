import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Header, Button } from 'react-native-elements';

export default class App extends Component {
  state = {
    searchTerm: ''

  };

  render() {
    const {
      searchContainer,
      searchText,
      searchButton
    } = styles;

    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <Header

          centerComponent={{ text: 'Youtube Search', style: { color: '#fff' } }}
          outerContainerStyles={{ backgroundColor: '#E62117' }}

        />
      <View style={searchContainer}>
        <TextInput
          style={searchText}
          onChangeText={searchInput => this.setState({ searchTerm: searchInput })}
          value={this.state.searchTerm}
        />
        <Button
          buttonStyle={searchButton}
          title="Submit"
          onPress={() => {
            console.log(this.state.searchTerm);
            console.log('button was pressed!');
          }}
        />
      </View>
      {/*List of videos*/}

      </View>
    );
  }
}


// style my components
const styles = {
  searchContainer: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  searchText: {
    marginBottom: 10

  },
  searchButton: {
    width: 100,
    backgroundColor: 'blue',
    alignSelf: 'center'

  }
};
