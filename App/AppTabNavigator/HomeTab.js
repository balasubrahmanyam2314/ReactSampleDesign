'use strict';

import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Category from './components/home/Category';
import Category1 from './components/home/Category1';
import ListItem from './components/home/list-item';

export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-home" size={25} style={{color: tintColor}} />
    ),
  };
  render () {
    return (
      <SafeAreaView style={{flex: 1}}>

        <View style={styles.container}>
          <View style={[styles.titleBarStyle, {marginTop: 12,paddingBottom:12}]}>
            <Text style={styles.titleTextStyle}>Home Page</Text>
            <Icon name="ios-search" size={18} style={styles.searchIconStyle} />
          </View>

          <ScrollView scrollEventThrottle={16}>

            <View style={{flex: 1, backgroundColor: 'white', paddingTop: 10}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Category1
                  imageUri={require ('../../assets/home.jpg')}
                  name="Home"
                />

                <Category1
                  imageUri={require ('../../assets/home.jpg')}
                  name="Home"
                />

                <Category1
                  imageUri={require ('../../assets/home.jpg')}
                  name="Home"
                />

              </ScrollView>
            </View>

            <ListItem sectionTitle={'Recent Trends'} sectionSubTitle={'on Week'}/>
            <ListItem sectionTitle={'Top Collection'} />
            <ListItem sectionTitle={'New Collection'} />

          </ScrollView>

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    paddingLeft: 12,
    backgroundColor: '#ffffff',
  },
  titleTextStyle: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'left',
    fontWeight: '400',
  },
  searchIconStyle: {
    color: '#fff',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 16,
    marginRight: 12,
    backgroundColor: '#FF8C00',
  },
  titleBarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
