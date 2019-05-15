import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Screen1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> screen1 </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        width: SCREEN_WIDTH,
        // height: '100%',
        flex: 1,
    }
});