import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { List,Checkbox, Radio } from '@bone/bone-mobile-ui';



export default class Repeat extends Component {
state = {
    value: 0,
    data: [
      { value: 0, title: '开启' },
      { value: 1, title: '关闭' },
    ],
  }
    onChange = value => this.setState({ value });

  render() {
        const { value, data } = this.state;

    return (
       <View style={styles.body}>
       < List style={styles.itemList} >
            <List>
            {data.map((item, index) => (
              <List.Item
                key={index}
                title={item.title}
                extra={<Radio checked={item.value === value} />}
                onPress={() => this.onChange(item.value)}
              />
            ))}
          </List>
          </List >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  repeat: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
   body: {
       height: Dimensions.get('window').height,
       backgroundColor: '#efeef1',
     },
     
     itemList: {
       marginTop: 20,
     },
     
});
