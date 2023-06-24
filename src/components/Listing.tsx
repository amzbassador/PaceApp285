import {Alert, StatusBar, LogBox} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
export default function Listing() {
  LogBox.ignoreAllLogs();
  const [email, setEmail] = useState('');
  const signIn = async () => {
    try {
      const usersCollection = await firestore()
        .collection('pace17')
        .doc('id17')
        .get();
    } catch (error: any) {
      Alert.alert(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Enter youtube id"
          //value={email}
          //onChangeText={email => setEmail(email)}
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity
        onPress={() => signIn()}
        style={{
          padding: 20,
          margin: 50,
          marginVertical: 10,
          borderRadius: 10,
          backgroundColor: '#f6880e',
          shadowOffset: {width: 0, height: 10},
          shadowOpacity: 0.3,
          shadowRadius: 10,
        }}>
        <Text style={{color: '#fff', textAlign: 'center', fontSize: 20}}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginText: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FF1493',
  },
});
