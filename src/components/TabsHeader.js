import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native'
import TopBarElement from './TopBarElement';

const listTabs = [
    {
        id: 'jhfkjd',
        title: 'Tab 1',
    },
    {
        id: 'jhf351kjd',
        title: 'Tab 2',
    },
    {
        id: 'jdfkjd',
        title: 'Tab 3',
    },
    {
        id: 'jhfkfsdfjd',
        title: 'Tab 4',
    },
    {
        id: 'jhfsfskjd',
        title: 'Tab 5',
    },
];

export default class TabsHeader extends Component {

    handelSelectTab = (selectedTab) => {
        this.props.handelSelectedIndex(selectedTab);
        this.props.scrollTab(selectedTab)
    }

    renderItems = ({item, index}) => (
        <TopBarElement element={item} handelSelectTab={this.handelSelectTab} index={index} selectedTab={this.props.selectedTab === index} />
    );

    keyExtractor = (item, index) => `${index}tab${item.id}`;

  render() {
    return (
      <View style={styles.wrapper}>
        <FlatList
          data={listTabs}
          renderItem={this.renderItems}
          keyExtractor={this.keyExtractor}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          extraData={this.props.selectedTab}
        //   contentContainerStyle={styles.wrapper}
        />
      </View>
      //   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.wrapper}>
      //       {listTabs.map(this.renderItems )}
      //   </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'blue',
    },
});