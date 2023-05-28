import React from 'react';
import {View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const VideoPlayer = () => {
  const videoData = [
    {id: 'dQw4w9WgXcQ'},
    {id: '84WIaK3bl_s'},
    // Add more video entries as needed
  ];

  const renderVideoItem = ({item}) => {
    // const videoUrl = `https://www.youtube.com/embed/${item.id}?controls=0`;
    const videoUrl = `https://www.youtube.com/embed/${item.id}?controls=0&origin=https://www.youtube.com`;

    const playVideo = () => {
      // Handle video playback for the selected item
      // (e.g., store the selected video ID in state and trigger the playback)
    };

    return (
      <TouchableOpacity style={styles.videoContainer} onPress={playVideo}>
        <WebView source={{uri: videoUrl}} style={styles.videoPlayer} />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={videoData}
      renderItem={renderVideoItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    height: 200,
    marginBottom: 10,
  },
  videoPlayer: {
    flex: 1,
  },
});

export default VideoPlayer;
