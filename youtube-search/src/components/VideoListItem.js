//stateless component of a VideoListItem
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { WatchListButton } from './';


const VideoListItem = (props) => {
  const snippet = props.video.snippet;
  const { imageStyle, containerStyle, videoTitleStyle, channelTitleStyle,
  videoDescriptionStyle } = styles;

  return (
    <View>
      <Card style={containerStyle}>
        <Image
          source={{ uri: snippet.thumbnails.medium.url }}
          style={imageStyle}
        />
        <Text style={videoTitleStyle}>{snippet.title}</Text>
        <Text style={channelTitleStyle}>{snippet.channelTitle}</Text>
        <Text style={videoDescriptionStyle}>{snippet.description}</Text>
        <WatchListButton videoId={props.video.id.videoId} />

      </Card>
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
  },
  videoTitleStyle: {
    fontSize: 20,
    fontWeight: '200',
    alignSelf: 'center',
    textAlign: 'center'
  },
  channelTitleStyle: {
    marginTop: 10,
    alignSelf: 'center',
    textAlign: 'center'
  },
  videoDescriptionStyle: {
    padding: 10,
    fontFamily: 'sans-serif-light',
    lineHeight: 17,
    marginBottom: 10

  }

};

export default VideoListItem;
