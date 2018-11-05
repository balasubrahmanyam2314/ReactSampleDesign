'use strict';

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Category from './Category';

class ListItem extends Component {
  render () {
    return (
      <View>
        <View style={styles.titleBarStyle}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 18,
                color: '#4d4d4d',
                marginRight: 10,
                fontWeight: '600',
              }}
            >
              {this.props.sectionTitle}
            </Text>
            <Text style={{fontSize: 13, color: '#6d6d6d', marginLeft: 10}}>
              {this.props.sectionSubTitle}
            </Text>
          </View>

          <Icon name="ios-arrow-dropright" size={25} style={{padding: 10}} />
        </View>

        <View style={{flex: 1, backgroundColor: 'white',}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category
              imageUri={require ('../../../../assets/home.jpg')}
              name="Home"
            />

            <Category
              imageUri={require ('../../../../assets/experiences.jpg')}
              name="Experiences"
            />

            <Category
              imageUri={require ('../../../../assets/restaurant.jpg')}
              name="Resturant"
            />

            <Category
              imageUri={require ('../../../../assets/home.jpg')}
              name="Resturant"
            />
            <Category
              imageUri={require ('../../../../assets/experiences.jpg')}
              name="Resturant"
            />
            <Category
              imageUri={require ('../../../../assets/restaurant.jpg')}
              name="Resturant"
            />
            <Category
              imageUri={require ('../../../../assets/home.jpg')}
              name="Resturant"
            />
            <Category
              imageUri={require ('../../../../assets/experiences.jpg')}
              name="Resturant"
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default ListItem;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
