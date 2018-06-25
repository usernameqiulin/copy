import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { ItemList  } from '@bone/bone-mobile-ui';



export default class Equipment extends Component {
constructor(...args) {
  super(...args);

  this.ondy = this.ondy.bind(this);
}
  render() {

    return (
       <View style={styles.body}>
        
               <ItemList
            style={styles.itemList}
            onItemClick={this.ondy}
            dataSource={[

              {name: '电源开关',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
              {name: '温度',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
              {name: '工作模式',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
            ]}
            status={[1,0,1]}
          />  
      </View>
    );
  }
  ondy(item){
    alert(item.key)
    this.props.navigate.push('/switch') //跳到电源开关
   

  }
}
const styles = StyleSheet.create({
  time: {
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
      button: {
         flex: 1,
       marginTop: 20,
       
     },
});
