//stateless component of a VideoListItem
import React from 'react';
import { View, Text, Image } from 'react-native';

const VideoListItem = (props) => {
  const snippet = props.video.snippet;
  const { imageStyle, containerStyle } = styles;
  //console.log(snippet.thumbnails.medium.url);
  return (
    <View style={containerStyle}>
      <Image
        source={{ uri: snippet.thumbnails.medium.url }}
        style={imageStyle}
      />
      <Text>{snippet.title}</Text>
      <Text>{snippet.channelTitle}</Text>
      <Text>{snippet.description}</Text>
    </View>
  );
};

const styles = {
  imageStyle: {
    height: 180,
    width: 320,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  containerStyle: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  }

};

export default VideoListItem;
