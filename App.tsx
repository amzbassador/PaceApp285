/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from './src/components/screen1';
import auth from '@react-native-firebase/auth';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FilterAndSort from './src/components/filters';
import Calenders from './src/components/calenders';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from './src/components/AuthScreens/Login';
import VideoPlayer from './src/components/AuthScreens/VideoPlayer';
import VideoList from './src/components/VideoLists';
import SignUp from './src/components/signup';
import Listing from './src/components/Listing';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    // AsyncStorage.getItem('isLoggedIn')
    //   .then(value => {
    //     setIsLoggedIn(value === 'true');
    //   })
    //   .catch(error => {
    //     console.log('Error retrieving authentication state:', error);
    //   });
  }, []);

  const getData = async () => {
    const user = auth().currentUser;

    try {
      const value = await AsyncStorage.getItem('isLoggedIn');

      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };
  // getData();

  // Create a stack navigator for the logged out state
  const LoggedOutStack = createNativeStackNavigator();
  const LoggedOutNavigator = () => (
    <LoggedOutStack.Navigator>
      <LoggedOutStack.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
      />
      {/* <LoggedOutStack.Screen name="Signup" component={SignUp} /> */}
      <LoggedOutStack.Screen
        name="tabNavigator"
        component={LoggedInNavigator}
        options={{headerShown: false}}
      />
    </LoggedOutStack.Navigator>
  );

  // Create a tab navigator for the logged in state
  const LoggedInTabs = createBottomTabNavigator();
  const LoggedInNavigator = () => (
    <LoggedInTabs.Navigator
      screenOptions={{
        tabBarStyle: {position: 'absolute', backgroundColor: '#000'},
        headerShown: false,
      }}>
      <LoggedInTabs.Screen
        options={{
          title: 'List',
          headerStyle: {
            backgroundColor: '#252525',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'ios-filter-outline' : 'ios-filter-outline'}
              size={26}
              style={{color: '#fff'}}
            />
          ),
        }}
        name="VideoList"
        component={VideoList}
      />
      <LoggedInTabs.Screen
        options={{
          title: 'Video',
          headerStyle: {
            backgroundColor: '#252525',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'ios-play-outline' : 'ios-play-outline'}
              size={26}
              style={{color: '#fff'}}
            />
          ),
        }}
        name="Screen1"
        component={Screen1}
      />
    </LoggedInTabs.Navigator>
  );

  return (
    <View style={styles.view}>
      <NavigationContainer>
        <LoggedOutNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  view: {
    flex: 1,
    backgroundColor: '#000',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
