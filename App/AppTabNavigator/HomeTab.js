'use strict';

import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Card from './components/home/Card';
import Section from './components/home/section';

type Props = {};
export default class HomeTab extends Component<Props> {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-home" size={25} style={{color: tintColor}} />
    ),
  };

  constructor () {
    super ();
    this.state = {
      data: {},
      key: [],
    };

    // Set dummy data for result
    this.state.data = {
      cards: [
        {
          id: '1',
          cardImage: 'https://picsum.photos/300/200?image=0',
          cardName: 'kjwhenwe ehwfwe uweifwbe wegfiwebf egfw',
        },
        {
          id: '2',
          cardImage: 'https://picsum.photos/300/200?image=30',
          cardName: 'kjwhenwe ehwfwe uweifwbe wegfiwebf egfw',
        },
        {
          id: '3',
          cardImage: 'https://picsum.photos/300/200?image=90',
          cardName: 'kjwhenwe ehwfwe uweifwbe wegfiwebf egfw',
        },
        {
          id: '4',
          cardImage: 'https://picsum.photos/300/200?image=29',
          cardName: 'kjwhenwe ehwfwe uweifwbe wegfiwebf egfw',
        },
        {
          id: '5',
          cardImage: 'https://picsum.photos/300/200?image=52',
          cardName: 'kjwhenwe ehwfwe uweifwbe wegfiwebf egfw',
        },
        {
          id: '6',
          cardImage: 'https://picsum.photos/300/200?image=49',
          cardName: 'kjwhenwe ehwfwe uweifwbe wegfiwebf egfw',
        },
      ],
      recent_trends: [
        {
          id: '7',
          thumbNail: 'https://picsum.photos/200/300?image=12',
          name: 'fssd sdfsd sdfsdfws',
          genre: 'fantacy',
        },
        {
          id: '8',
          thumbNail: 'https://picsum.photos/200/300?image=18',
          name: 'qwerty',
          genre: 'fantacy',
        },
        {
          id: '9',
          thumbNail: 'https://picsum.photos/200/300?image=30',
          name: 'qwerty',
          genre: 'fantacy',
        },
        {
          id: '10',
          thumbNail: 'https://picsum.photos/200/300?image=137',
          name: 'qwerty',
          genre: 'fantacy',
        },
        {
          id: '11',
          thumbNail: 'https://picsum.photos/200/300?image=123',
          name: 'qwerty',
          genre: 'fantacy',
        },
        {
          id: '12',
          thumbNail: 'https://picsum.photos/200/300?image=172',
          name: 'qwerty',
          genre: 'fantacy',
        },
        {
          id: '13',
          thumbNail: 'https://picsum.photos/200/300?image=122',
          name: 'qwerty',
          genre: 'fantacy',
        },
      ],
      top_collections: [
        {
          id: '14',
          thumbNail: 'https://picsum.photos/200/300?image=126',
          name: 'qwerty',
          genre: 'fantacy',
        },
        {
          id: '15',
          thumbNail: 'https://picsum.photos/200/300?image=158',
          name: 'qwerty',
          genre: 'fantacy',
        },
        {
          id: '16',
          thumbNail: 'https://picsum.photos/200/300?image=320',
          name: 'qwerty',
          genre: 'fantacy',
        },
        {
          id: '17',
          thumbNail: 'https://picsum.photos/200/300?image=17',
          name: 'qwerty',
          genre: 'fantacy',
        },
        {
          id: '18',
          thumbNail: 'https://picsum.photos/200/300?image=23',
          name: 'qwerty',
          genre: 'fantacy',
        },
        {
          id: '19',
          thumbNail: 'https://picsum.photos/200/300?image=72',
          name: 'qwerty',
          genre: 'fantacy',
        },
        {
          id: '20',
          thumbNail: 'https://picsum.photos/200/300?image=2',
          name: 'qwerty',
          genre: 'fantacy',
        },
      ],
    };

    this.state.keys = ['cards', 'recent_trends', 'top_collections'];
  }
  renderCardData () {
    return this.state.data.cards.map (card => (
      <Card key={card.id} card={card} />
    ));
  }

  renderData () {
    let values = this.state.keys.map (el => this.state.data[el]);
    console.log (values);

    return values.map(value =>(
      <Section sectionTitle={'Recent Trends'} list={value} />
    ));
    
  }

  render () {
    return (
      <SafeAreaView style={{flex: 1}}>

        <View style={styles.container}>
          <View
            style={[styles.titleBarStyle, {marginTop: 12, paddingBottom: 12}]}
          >
            <Text style={styles.titleTextStyle}>Home Page</Text>
            <Icon name="ios-search" size={18} style={styles.searchIconStyle} />
          </View>

          <ScrollView scrollEventThrottle={16}>

            <View style={{flex: 1, backgroundColor: 'white', paddingTop: 10}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {this.renderCardData ()}

              </ScrollView>
            </View>

            {this.renderData ()}

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
