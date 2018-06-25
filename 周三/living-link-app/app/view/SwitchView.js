import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { ItemList  } from '@bone/bone-mobile-ui';



export default class Repeat extends Component {

  render() {
    return (
       <View style={styles.body}>
              <ItemList
            style={styles.itemList}
            themeColor="#7d92bc"
            isMultiple={false}
            type="rightCheck"
            dataSource={[
              { name: '开启', rightIcon: '&#xfc51;' },
              { name: '关闭', rightTitleColor: '#7d92bc', rightIcon: '&#xfc51;' },
            ]}
            status={[0, 1]}
          />
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
