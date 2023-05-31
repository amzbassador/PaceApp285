/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from './src/components/screen1';
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
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.view}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {position: 'absolute', backgroundColor: '#000'},
          }}>
          <Tab.Screen
            name="Filter"
            component={SignUp}
            options={{
              title: 'Registration',
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
                  name={focused ? 'ios-home' : 'ios-filter-outline'}
                  size={26}
                  style={{color: '#fff'}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Login',
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
                  name={focused ? 'ios-home' : 'ios-settings-outline'}
                  size={26}
                  style={{color: '#fff'}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Listing"
            component={Listing}
            options={{
              title: 'Listing',
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
                  name={focused ? 'ios-home' : 'ios-settings-outline'}
                  size={26}
                  style={{color: '#fff'}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Home"
            component={VideoList}
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
                  name={focused ? 'ios-home' : 'ios-play-outline'}
                  size={26}
                  style={{color: '#fff'}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Screen1"
            component={Screen1}
            options={{
              title: 'Videos',
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
                  name={focused ? 'ios-home' : 'ios-play-outline'}
                  size={26}
                  style={{color: '#fff'}}
                />
              ),
            }}
          />

          <Tab.Screen
            name="Calender"
            component={Calenders}
            options={{
              title: 'Lectures',
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
                  name={focused ? 'ios-home' : 'ios-search-outline'}
                  size={26}
                  style={{color: '#fff'}}
                />
              ),
            }}
          />
        </Tab.Navigator>
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
