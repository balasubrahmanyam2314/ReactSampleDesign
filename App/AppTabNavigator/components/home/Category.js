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
      <View style={{alignItems: 'center'}}>
        <Image
          source={{uri: this.state.item.thumbNail}}
          style={{
            width: 100,
            height: 100,
            marginRight: 10,
            borderRadius: 6,
          }}
        />
        <View style={{width: 100}}>
          <Text
            style={{textAlign: 'center'}}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {this.state.item.name}
          </Text>
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
