'use strict';

import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView,TouchableOpacity,Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class ExploreTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-compass" size={25} style={{color: tintColor}} />
    ),
  };
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.toolbarStyle}>
          <Icon name="md-arrow-back" size={26} style={styles.searchIconStyle} />
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="md-heart-empty"
              size={26}
              style={styles.searchIconStyle}
            />
            <Icon name="ios-log-out" size={26} style={styles.searchIconStyle} />
            <Icon name="md-bookmark" size={26} style={styles.searchIconStyle} />
          </View>
        </View>

        <TouchableOpacity style={{flexDirection: 'row'}}>

          <Image
            source={require ('../../assets/home.jpg')}
            style={{
              height: 140,
              width: 100,
              resizeMode: 'cover',
              borderRadius: 6,
            }}
          />

          <View style={{marginLeft: 12,justifyContent:'center'}}>
            <Text>wefnweinfwnegiwnig</Text>
            <Text>
              efq ejknfgqwekgw
            </Text>

            <Text>
              eg wkegkwmekgmkewg wegw
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 12,
  },
  toolbarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    height: 56,
  },
  searchIconStyle: {
    color: '#000',
    padding: 6,
    marginRight: 6,
  },
});
