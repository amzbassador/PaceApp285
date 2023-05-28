import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';

import auth from '@react-native-firebase/auth';

const SignUp = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const createUser = (email: string, password: string) => {
    console.log('Email and password is ', email, password);
    try {
      const response = auth().createUserWithEmailAndPassword(email, password);
      console.log('returned', response);
      ToastAndroid.show(
        `A pikachu appeared nearby ! ${response}`,
        ToastAndroid.SHORT,
      );
    } catch (error) {
      console.log('errors is');

      ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
    }
  };

  //createUser('xohaib1717@gmail.com', '12345678');
  const handleValidation = () => {
    if (email.trim() === '') {
      setError('Email is required');
    } else if (!isValidEmail(email)) {
      setError('Invalid email format');
    } else {
      setError('');
      // Perform further actions (e.g., submit form, API call, etc.)
    }
  };
  const handleEmailChange = (text: any) => {
    setEmail(text);
    setError('');
  };
  const isValidEmail = (email: any) => {
    // Simple email validation regex pattern
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  return (
    <View style={styles.view}>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={email => {
            [handleEmailChange(email), setEmail(email)];
          }}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>
      {error !== '' && <Text style={{color: 'red'}}>{error}</Text>}

      <TouchableOpacity
        onPress={() => createUser(email, password)}
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
          Sign up
        </Text>
      </TouchableOpacity>
      {/* 
      <Text style={styles.text}>Gender</Text>
      <CheckBox
        title="Male"
        textStyle={{color: '#fff'}}
        containerStyle={{backgroundColor: '#000', borderColor: '#000'}}
        checked={false}
      />
      <CheckBox
        title="Female"
        textStyle={{color: '#fff'}}
        containerStyle={styles.checkbox}
        checked={false}
      />
      <Text style={styles.text}>Fee</Text>
      <View style={styles.border}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
          style={styles.pickerStyle}>
          <Picker.Item label="Paid" value="java" />
          <Picker.Item label="UnPaid" value="js" />
        </Picker>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  pickerStyle: {
    backgroundColor: '#0D0D0D',
    color: '#fff',
  },
  checkbox: {
    backgroundColor: '#000',
    borderColor: '#000',
    color: '#fff',
  },
  border: {
    borderColor: '#fff',
    borderWidth: 1,
    left: 12,
    alignContent: 'center',
    marginRight: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  buttonsView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  view: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#000',
  },
  inputView: {
    marginTop: 40,
    backgroundColor: '#FFC0CB',
    borderRadius: 10,
    width: '90%',
    height: 55,
    marginBottom: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  text: {
    color: '#fff',
    fontFamily: 'Popppins',
    fontStyle: 'normal',
    fontSize: 16,
    marginTop: 45,
    marginBottom: 10,
    left: 12,
    fontWeight: '700',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
});

export default SignUp;
