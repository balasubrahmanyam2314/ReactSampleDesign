'use strict';

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Category from './Category';

class Section extends Component {
  constructor (props) {
    super (props);

    this.state = {
      title:this.props.sectionTitle,
      subTitle:this.props.sectionSubTitle,
      list: this.props.list,
    };
  }

  renderItem () {
    return this.state.list.map (item => <Category key={item.id} data={item} />);
  }
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
              {this.state.title}
            </Text>
            <Text style={{fontSize: 13, color: '#6d6d6d', marginLeft: 10}}>
              {this.state.subTitle}
            </Text>
          </View>

          <Icon name="ios-arrow-dropright" size={25} style={{padding: 10}} />
        </View>

        <View style={{}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            {this.renderItem ()}
  
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default Section;

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
