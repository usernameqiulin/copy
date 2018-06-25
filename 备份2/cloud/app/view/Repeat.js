import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { ItemList  } from '@bone/bone-mobile-ui';



export default class Repeat extends Component {
constructor(...args) {
  super(...args);

  this.onclickweek = this.onclickweek.bind(this);
}
  render() {
    return (
       <View style={styles.body}>
             <ItemList
            style={styles.itemList}
            themeColor="#1fc8a2"//主题颜色
            isMultiple    //是否多选
            type="rightCheck"   //列表类型选择列表
            onClickBefore={this.onclickweek} //添加点击星期事件
            dataSource={[
              { name: '周一', rightIcon: '&#xfc51;' },
              { name: '周二', rightIcon: '&#xfc51;' },
              { name: '周三', rightIcon: '&#xfc51;' },
              { name: '周四', rightIcon: '&#xfc51;' },
              { name: '周五', rightIcon: '&#xfc51;' },
              { name: '周六', rightIcon: '&#xfc51;' }, 
              { name: '周日', rightIcon: '&#xfc51;' }, 
              ]}
            // status={[1, 0, 0, 1,0,1,1]}//多选按钮的状态(选择/未选择)
          />
      </View>
    );
  }
  onclickweek(item){  //week点击事件
    arr=[]
  const index = item.index + 1
    if (index){
       arr.push([index])

    }
    alert(arr)

    // alert("您已选择星期"+item.value)
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
