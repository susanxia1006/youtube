import React, { Component } from 'react';
import { View } from 'react-native';
import YTSearch from 'youtube-api-search';
import { SearchBar, AppHeader, VideoList } from './src/components';


const API_KEY = 'AIzaSyDYbQ5iDSAtWg1Xbwrr_HPMNWX9FuXII5A';

export default class App extends Component {
  state = {
    videos: [],
    loading: false
  };


  onPressSearch = (term) => {
    console.log(term);
    this.searchYT(term);
  };

  searchYT = (term) => {
    this.setState({ loading: true });
    YTSearch({ key: API_KEY, term }, result => {
            this.setState({ videos: result });
            this.setState({ loading: false });
        });
  };


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <AppHeader headerText='Youtube Search' />
        <SearchBar
          search={this.onPressSearch}
          displayText={this.state.loading ? 'Loading...' : 'Submit'}
          // set to fill in the loading lag
        />
        <VideoList videos={this.state.videos} />


      </View>
    );
  }
}
