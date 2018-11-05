import React, {Component} from 'react';
import {Dimensions,View, Text, StyleSheet, Image} from 'react-native';

var deviceWidth = Dimensions.get('window').width;

class Category extends Component {
  render () {
    return (
      <View
        style={{
          height: deviceWidth/2,
          width: 100,
          marginRight: 20,
        }}
      >
        <View style={{flex: 2}}>
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
        </View>
        <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}
export default Category;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
