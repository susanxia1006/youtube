// stateless component WatchListButton that allows one to watch the videos
// in the browser.
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { WebBrowser } from 'expo';

const WatchListButton = (props) => (
    <View>
      <Button
        title="Watch on Youtube"
        onPress={() => {
          WebBrowser.openBrowserAsync(`https://m.youtube.com/watch?v=${props.videoId}`);
        }}
      />
    </View>
  );


export default WatchListButton;
