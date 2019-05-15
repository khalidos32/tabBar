import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class TopBarElement extends React.Component {
  
    handelClick = () => {
        this.props.handelSelectTab(this.props.index);
    }

  render() {
    const {selectedTab} = this.props;
    return (
      <TouchableOpacity style={[styles.elementWrapper, selectedTab && styles.selectedStyle ]} onPress={this.handelClick} >
        <Text style={styles.title}>
            {this.props.element.title}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles =StyleSheet.create({
    elementWrapper: {
        minWidth: SCREEN_WIDTH / 4,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '400',
    },
    selectedStyle: {
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    }
})