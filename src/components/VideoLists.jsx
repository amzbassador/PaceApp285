import React from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const videoData = [
  {
    id: 'qt-p-4CQS74',
    thumbnail: 'https://i.ytimg.com/vi/qt-p-4CQS74/hqdefault.jpg',
  },
  {
    id: 'Mo4QVEmWjiQ',
    thumbnail: 'https://i.ytimg.com/vi/Mo4QVEmWjiQ/hqdefault.jpg',
  },
  {
    id: 'WRpd6Mr2-AI',
    thumbnail: 'https://i.ytimg.com/vi/WRpd6Mr2-AI/hqdefault.jpg',
  },
  {
    id: 'NSe9t9WOT04',
    thumbnail: 'https://i.ytimg.com/vi/WRpd6Mr2-AI/hqdefault.jpg',
  },
  {
    id: 'r2YA2hgi_Sg',
    thumbnail: 'https://i.ytimg.com/vi/r2YA2hgi_Sg/hqdefault.jpg',
  },
  {
    id: 'D1r6tDuTCWc',
    thumbnail: 'https://i.ytimg.com/vi/D1r6tDuTCWc/hqdefault.jpg',
  },
  {
    id: 'tfefbrthVzQ',
    thumbnail: 'https://i.ytimg.com/vi/tfefbrthVzQ/hqdefault.jpg',
  },
  {
    id: 'QKxeXdnj3GA',
    thumbnail: 'https://i.ytimg.com/vi/QKxeXdnj3GA/hqdefault.jpg',
  },
  {
    id: '7CaLc0SeUHk',
    thumbnail: 'https://i.ytimg.com/vi/7CaLc0SeUHk/hqdefault.jpg',
  },
  // Add more video data here
];

const VideoList = ({navigation}) => {
  const renderItem = ({item}) => {
    const handlePress = () => {
      navigation.navigate('Screen1', {videoId: item.id});
    };

    return (
      <TouchableOpacity style={styles.thumbnailContainer} onPress={handlePress}>
        <Image source={{uri: item.thumbnail}} style={styles.thumbnailImage} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={videoData}
        renderItem={renderItem}
        keyExtractor={item => item.id} // Update the keyExtractor
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingVertical: 10,
  },
  thumbnailContainer: {
    margin: 15,
    borderWidth: 2,
    borderRadius: 10,
  },
  thumbnailImage: {
    width: '100%',
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
  },
});

export default VideoList;
