//stateless component of a displayed list of youtube videos
import React from 'react';
import { ScrollView } from 'react-native';
import { VideoListItem } from './';


const VideoList = (props) => {
  const VideoItems = props.videos.map(video => (
      <VideoListItem
        key={video.etag}
        video={video}
      />
  )
);


  return (
    <ScrollView>
      {VideoItems}
    </ScrollView>
  );
};

export default VideoList;
