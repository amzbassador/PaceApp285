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
import {firebase} from '@react-native-firebase/auth';
import {Text} from 'react-native-elements';

const VideoList = ({navigation}) => {
  LogBox.ignoreAllLogs();
  const [videoList, setVideoList] = useState();
  const [groupTitle, setGroupTitle] = useState('');

  useEffect(() => {
    const getVideoId = async () => {
      const currentUser = firebase.auth().currentUser;
      const email = currentUser?.email;
      try {
        const usersCollection = await firestore()
          .collection('pace17')
          .doc('id17')
          .get();
        console.log('email', email);
        if (email && email.startsWith('g8')) {
          const videoData = await usersCollection._data.g8Video.map(v => ({
            id: v,
            thumbnail: `https://i.ytimg.com/vi/${v}/hqdefault.jpg`,
          }));
          console.log('videoList', videoData);
          setVideoList(videoData);
        }else if (email && email.startsWith('g11')){
          const videoData = await usersCollection._data.g11.map(v => ({
            id: v,
            thumbnail: `https://i.ytimg.com/vi/${v}/hqdefault.jpg`,
          }));
          console.log('videoList', videoData);
          setVideoList(videoData);
        }
         else {
          const videoData = await usersCollection._data.videoId.map(v => ({
            id: v,
            thumbnail: `https://i.ytimg.com/vi/${v}/hqdefault.jpg`,
          }));
          console.log('videoList', videoData);
          setVideoList(videoData);
        }
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
      {/* <Text style={styles.title}>VideoList</Text> */}
      <Text style={styles.desc}>Click Video From List to Continue</Text>
      {console.log('videoList', videoList)}
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
    backgroundColor: '#040e38',
  },
  listContainer: {
    paddingVertical: 10,
  },
  title: {
    alignSelf: 'center',
    fontSize: 28,
    margin: 10,
    fontWeight: 'bold',
  },
  desc: {
    alignSelf: 'center',
    fontSize: 18,
    margin: 2,
    marginTop: 25,
    fontWeight: 'bold',
    color: '#fff',
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
    borderColor: '#fff',
    borderWidth: 1,
  },
});

export default VideoList;
