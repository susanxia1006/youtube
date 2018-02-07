// stateless component WatchListButton that allows one to watch the videos
// in the browser.
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { WebBrowser } from 'expo';

const WatchListButton = (props) => (
    <View>
      <Button
        buttonStyle={styles.watchButtonStyle}
        title="Watch on Youtube"
        leftIcon={{ name: 'play-arrow', type: 'material-icons' }}
        raised
        onPress={() => {
          WebBrowser.openBrowserAsync(`https://m.youtube.com/watch?v=${props.videoId}`);
        }}
      />
    </View>
  );

  const styles = {
    watchButtonStyle: {
      alignSelf: 'stretch',
      backgroundColor: '#E62117'
    }
  };


export default WatchListButton;
