'use strict';

import React, {Component} from 'react';
import {Dimensions, View, Text, StyleSheet, Image} from 'react-native';

var deviceWidth = Dimensions.get ('window').width;

class Card extends Component {
  constructor (props) {
    super (props);

    this.state = {
      item: this.props.card,
    };
  }

  render () {
    return (
      <View
        style={{
          height: 200,
          width: deviceWidth / 1.2,
          marginRight: 20,
          justifyContent: 'flex-end',
        }}
      >
        <Image
          source={{uri: this.state.item.cardImage}}
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: 'cover',
            borderRadius: 6,
          }}
        />
        <View style={{flex: 1, padding: 10, position: 'absolute'}}>
          <Text style={{color: 'white'}}>{this.state.item.cardName}</Text>
        </View>
      </View>
    );
  }
}
export default Card;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
