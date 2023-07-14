import {Alert, StatusBar} from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import RNRestart from 'react-native-restart';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
export default function Login({navigation}) {
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const signIn = async (email: any, password: any) => {
    try {
      auth()
        .signInWithEmailAndPassword(email.trim(), password.trim())
        .then(async () => {
          console.log('login');
          // Login successful
          // await AsyncStorage.setItem('isLoggedIn', 'true');
          Alert.alert('Success', 'Login successful');
          await navigation.push('tabNavigator');
          // RNRestart.Restart();
        })
        .catch(error => {
          Alert.alert('Error', 'Login failed');
        });
    } catch (error: any) {
      Alert.alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={require('../images/logo.png')} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Your Email"
          onChangeText={email => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={password => setPassword(password)}
        />
      </View>

      <TouchableOpacity
        onPress={() => signIn(email, password)}
        style={{
          width: '80%',
          borderRadius: 25,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
          backgroundColor: '#FFA500',
        }}>
        <Text style={{color: '#fff', textAlign: 'center', fontSize: 20}}>
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40,
    width: 180,
    height: 180,
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
