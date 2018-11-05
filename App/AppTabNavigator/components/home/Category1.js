'use strict';

import React, {Component} from 'react';
import {Dimensions,View, Text, StyleSheet, Image} from 'react-native';

var deviceWidth = Dimensions.get('window').width;

class Category1 extends Component {
  render () {
    return (
      <View
        style={{
          height: 200,
          width: deviceWidth/1.2,
          marginRight: 20,
          justifyContent:'flex-end',
        }}
      >
        <Image
          source={this.props.imageUri}
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: 'cover',
            borderRadius: 6,
          }}
        />
        <View style={{flex: 1, padding: 10, position: 'absolute'}}>
          <Text style={{color: 'white'}}>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}
export default Category1;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
