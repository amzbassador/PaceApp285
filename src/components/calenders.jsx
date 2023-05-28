import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const Calenders = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>8,March 2023</Text>
      <View style={styles.calender}>
        <Calendar
          markingType={'period'}
          markedDates={{
            '2012-05-20': {textColor: 'green'},
            '2012-05-22': {startingDay: true, color: 'green'},
            '2012-05-23': {
              selected: true,
              endingDay: true,
              color: 'green',
              textColor: 'gray',
            },
            '2012-05-04': {
              disabled: true,
              startingDay: true,
              color: 'green',
              endingDay: true,
            },
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 15,
        }}>
        <Text style={styles.text}>Upcoming List</Text>
        <Text style={styles.text}>View All</Text>
      </View>
      <Text style={styles.textDate}>Today- 8:30 PM</Text>
      <Text style={styles.textDate}>Mr.ABC</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderColor: '#fff',
    borderWidth: 1,
    left: 12,
    alignContent: 'center',
    marginRight: 20,
  },
  calender: {
    margin: 15,
  },
  view: {
    flex: 1,
    backgroundColor: '#000',
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
  },
  textDate: {
    color: '#fff',
    fontFamily: 'Popppins',
    fontStyle: 'normal',
    fontSize: 16,
    marginTop: 4,
    marginBottom: 1,
    left: 12,
    fontWeight: '700',
  },
});

export default Calenders;
