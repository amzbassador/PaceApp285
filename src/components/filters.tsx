import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {CheckBox} from 'react-native-elements';
import auth from '@react-native-firebase/auth';

const FilterAndSort = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  const createUser = (email: string, password: string) => {
    try {
      auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      Alert.alert(error);
    }
  };

  createUser('xohaib1717@gmail.com', '12345678');

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Education</Text>
      <View style={styles.border}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
          style={styles.pickerStyle}>
          <Picker.Item label="Matric" value="java" />
          <Picker.Item label="FSC" value="js" />
        </Picker>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Registration No."
          placeholderTextColor="#003f5c"
          //onChangeText={email => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          // onChangeText={password => setPassword(password)}
        />
      </View>
      <Text style={styles.text}>Location</Text>
      <View style={styles.border}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
          style={styles.pickerStyle}>
          <Picker.Item label="Multan" value="java" />
          <Picker.Item label="Khanewal" value="js" />
        </Picker>
      </View>
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
      <Text>Do you like React Native?</Text>
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
      </View>
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
    backgroundColor: '#000',
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

export default FilterAndSort;
