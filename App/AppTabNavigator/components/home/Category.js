import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class Category extends Component {

  constructor (props) {
    super (props);

    this.state = {
      item: this.props.data,
    };
  }

  render () {
    return (
      <View
        style={{
          height: 180,
          width: 100,
          marginRight: 20,
        }}
      >
        <View style={{flex: 2}}>
          <Image
            source={{uri: this.state.item.thumbNail}}
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
          <Text>{this.state.item.name}</Text>
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
