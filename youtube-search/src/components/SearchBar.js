// render is a method for components with a life cycle.  After rendering, always
// want to return some .jsx.

import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

class SearchBar extends Component {
  state = { searchTerm: '' };

  render() {
    const {
      searchContainer,
      searchText,
      searchButton
    } = styles;

    return (
      <View style={searchContainer}>
        <TextInput
          style={searchText}
          onChangeText={searchInput => this.setState({ searchTerm: searchInput })}
          value={this.state.searchTerm}
        />
        <Button
          buttonStyle={searchButton}
          title={this.props.displayText}
          onPress={() => {
            this.props.search(this.state.searchTerm);
          }}

        />
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

export default SearchBar;
