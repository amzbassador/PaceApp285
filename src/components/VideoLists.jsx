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
        setVideoList(videoData);
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
