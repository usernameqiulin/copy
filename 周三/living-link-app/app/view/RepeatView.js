import React, { Component } from 'react';
import { StyleSheet, View, Dimensions,Text } from 'react-native';
import { ItemList } from '@bone/bone-mobile-ui';

export default class Repeat extends Component {
constructor(...args) {
  super(...args);
 this.state={
   listWeek:[0,0,0,0,0,0,0]
 }
  //this.onclickweek = this.onclickweek.bind(this);
}
  render() {
    const { listWeek } = this.state;
    let listArray = listWeek;
    return (
       <View style={styles.body}>
             <ItemList
            style={styles.itemList}
            themeColor="#1fc8a2"//主题颜色
            isMultiple    //是否多选
            type="rightCheck"   //列表类型选择列表
            onItemClick = {
             (item) => this.onclickweek(item, listArray)
            } //添加点击星期事件
            dataSource={[
              { name: '周一' },
              { name: '周二'},
              { name: '周三'},
              { name: '周四'},
              { name: '周五'},
              { name: '周六'}, 
              { name: '周日'}, 
              ]}
              status={ listWeek }//多选按钮的状态(选择/未选择)
          />
      </View>
    );
  }
  onclickweek(item, listArray) { //week点击事件
    listArray.splice(item.index, 1, item.status)
 
   this.setState({
     listWeek: listArray
   })
   this.props.onClickView(listArray)
   
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
