'use strict';

import React ,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeTab from './AppTabNavigator/HomeTab';
import ExploreTab from './AppTabNavigator/ExploreTab';
import BooksTab from './AppTabNavigator/BooksTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

export default class DashBoardScreen extends Component {
  static navigationOptions = {
    header:null,
  };
  render () {
    return (
      <AppTabNavigator />
    );
  }
}

const AppTabNavigator = createBottomTabNavigator({
    Home:{
        screen: HomeTab
    },
    Explore:{
        screen:ExploreTab
    },
    Books:{
        screen: BooksTab
    },
    Profile:{
        screen: ProfileTab
    }
},{
    animationEnabled:true,
    swipeEnabled:true,
    tabBarPosition:'bottom',
    tabBarOptions:{
        activeTintColor:'#FF8C00',
        inActiveTintColor:'#dedede',
        showLabel:true,
        showIcon:true,
    }
})

const styles = StyleSheet.create ({
  container: {},
});
