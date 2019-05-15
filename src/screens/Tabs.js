import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TabBody from './../components/TabBody';

export default class Tabs extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
          <TabBody />
      </View>
    )
  }
}
