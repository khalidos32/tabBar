import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import Screen1 from './../screens/Screen1';
import Screen2 from './../screens/Screen2';
import Screen3 from './../screens/Screen3';
import Screen4 from './../screens/Screen4';
import Screen5 from './../screens/Screen5';
import Tabsheader from './../components/TabsHeader';

const ListTabsBody = [
    {
        id: 'ghzf',
        name: 'tab1',
    },
    {
        id: 'zdfds',
        name: 'tab2',
    },
    {
        id: 'zefzf',
        name: 'tab3',
    },
    {
        id: 'zfdsdsv',
        name: 'tab4',
    },
    {
        id: 'ljlkdsn',
        name: 'tab5',
    },
];

export default class TabBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    }
    this.viewabilityConfig = {
      waitForInteraction: true,
      viewAreaCoveragePercentThreshold: 100
  }
  }
  renderItems = ({item, index}) => {
      switch (item.name) {
          case 'tab1':
            return <Screen1 />
          case 'tab2':
            return <Screen2 />
          case 'tab3':
            return <Screen3 />
          case 'tab4':
            return <    Screen4 />
          case 'tab5':
            return <Screen5 />
          default:
              return null;
      }
  };

  scrollTab = (index) => {
    this.Tab.scrollToIndex({index, animated: true})
  }

  handelViewAble = (data) => {
    console.log('hello')
    console.log(data);
    this.setState({
      selectedIndex: data.changed[0].index
    })
  }

  handelSelectedIndex = (selectedIndex) => {
    this.setState({
      selectedIndex
    })
  }

  keyExtractor = (item, index) => `${index}tabBody${item.id}`
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Tabsheader handelSelectedIndex={this.handelSelectedIndex} selectedTab={this.state.selectedIndex} scrollTab={this.scrollTab} />
        <FlatList
          data={ListTabsBody}
          renderItem={this.renderItems}
          keyExtractor={this.keyExtractor}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          pagingEnabled={true}
          ref={(ref) => {
              this.Tab = ref;
          }}
          onViewableItemsChanged={this.handelViewAble}
          viewabilityConfig={this.viewabilityConfig}
          indicatorStyle='white'
        />
      </View>
    );
  }
}
