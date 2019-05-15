import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';
import TabBody from './../components/TabBody';

export default class Tabs extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, }}>
          <TabBody />
      </SafeAreaView>
    )
  }
}
