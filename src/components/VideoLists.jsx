import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  LogBox,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

// const videoData = [
//   {
//     id: 'ZgLk_QZj_3Y',
//     thumbnail: 'https://i.ytimg.com/vi/ZgLk_QZj_3Y/hqdefault.jpg',
//   },
//   {
//     id: 'Mo4QVEmWjiQ',
//     thumbnail: 'https://i.ytimg.com/vi/Mo4QVEmWjiQ/hqdefault.jpg',
//   },
//   {
//     id: 'WRpd6Mr2-AI',
//     thumbnail: 'https://i.ytimg.com/vi/WRpd6Mr2-AI/hqdefault.jpg',
//   },
//   {
//     id: 'Hx3jNofGooE',
//     thumbnail: 'https://i.ytimg.com/vi/Hx3jNofGooE/hqdefault.jpg',
//   },
//   {
//     id: 'r2YA2hgi_Sg',
//     thumbnail: 'https://i.ytimg.com/vi/r2YA2hgi_Sg/hqdefault.jpg',
//   },
//   {
//     id: 'D1r6tDuTCWc',
//     thumbnail: 'https://i.ytimg.com/vi/D1r6tDuTCWc/hqdefault.jpg',
//   },
//   {
//     id: 'tfefbrthVzQ',
//     thumbnail: 'https://i.ytimg.com/vi/tfefbrthVzQ/hqdefault.jpg',
//   },
//   {
//     id: 'QKxeXdnj3GA',
//     thumbnail: 'https://i.ytimg.com/vi/QKxeXdnj3GA/hqdefault.jpg',
//   },
//   {
//     id: '7CaLc0SeUHk',
//     thumbnail: 'https://i.ytimg.com/vi/7CaLc0SeUHk/hqdefault.jpg',
//   },
//   // Add more video data here
// ];

const VideoList = ({navigation}) => {
  LogBox.ignoreAllLogs();
  const [videoList, setVideoList] = useState();

  useEffect(() => {
    const getVideoId = async () => {
      try {
        const usersCollection = await firestore()
          .collection('pace17')
          .doc('id17')
          .get();
        const videoData = usersCollection._data.videoId.map(v => ({
          id: v,
          thumbnail: `https://i.ytimg.com/vi/${v}/hqdefault.jpg`,
        }));
        console.log('videoData is', videoData);
        setVideoList(videoData);
        console.log('user', usersCollection._data.videoId);
      } catch (error) {
        Alert.alert(error);
      }
    };
    getVideoId();
  }, []);
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
        data={videoList}
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
