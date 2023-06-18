import React from 'react';
import {View, StyleSheet, LogBox} from 'react-native';
import {WebView} from 'react-native-webview';

export default function Screen1({route}) {
  LogBox.ignoreAllLogs();
  // const videoId = '84WIaK3bl_s';
  const {videoId} = route.params || 'qt-p-4CQS74';
  console.log('VideoId', videoId);

  return (
    <View style={styles.container}>
      <WebView
        style={styles.videoPlayer}
        source={{uri: `https://www.youtube.com/embed/${videoId}`}}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
      />
      <View style={styles.overlay}>
        <View style={styles.cornerOverlay} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  videoPlayer: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60, // Adjust the height as needed to cover the desired portion
    backgroundColor: '#000', // Set the desired background color to cover the video
  },
  cornerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0, // Adjust the width as needed to cover the top corners
    height: 40, // Adjust the height as needed to cover the top corners
    backgroundColor: 'transparent', // Set transparent background color for the corners
  },
});
