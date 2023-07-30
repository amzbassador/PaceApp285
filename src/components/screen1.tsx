import React, {useEffect, useState} from 'react';
import {View, StyleSheet, LogBox, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

export default function Screen1({route}) {
  LogBox.ignoreAllLogs();
  // const videoId = '84WIaK3bl_s';
  const {videoId} = route.params || 'qt-p-4CQS74';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show the activity indicator
    setLoading(true);

    // Hide the activity indicator after 3 seconds
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clean up the timeout
    return () => clearTimeout(timeout);
  }, []);
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <>
          <ReactNativeZoomableView
            maxZoom={1.5}
            zoomStep={0.5}
            minZoom={1}
            initialZoom={1}>
            <WebView
              style={styles.videoPlayer}
              source={{
                uri: `https://www.youtube.com/embed/${videoId}?playsinline=1&vq=hd1080`,
              }}
              allowsInlineMediaPlayback={true}
              mediaPlaybackRequiresUserAction={false}
            />
          </ReactNativeZoomableView>
          <View style={styles.overlay}>
            <View style={styles.cornerOverlay} />
          </View>
        </>
      )}
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
