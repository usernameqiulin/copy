import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { OptionPicker,ItemList  } from '@bone/bone-mobile-ui';


const getNumbers = (count) => {
  const result = [];
  for (const index = 0; index < count; ++index) {
    result.push(index.toString());
  }
  return result;
};
export default class Edit extends Component {
constructor(...args) {
  super(...args);

      this.onclickrepeat = this.onclickrepeat.bind(this)
      this.onclickaction = this.onclickaction.bind(this)
}
  render() {

    return (
       <View style={styles.body}>
         < OptionPicker
          style={styles.OptionPicker}
           groups = {
                [{
                    key: 'hour',
                    source: getNumbers(24),
                    idx: 12,
                    unit: '时',
                  },
                  {
                    key: 'minute',
                    source: getNumbers(60),
                    idx: 30,
                    unit: '分',
                  },
                ]
               }
              />
               <ItemList
            style={styles.itemList}
            onClickBefore={this.onclickrepeat} //添加重复事件
            dataSource={[
              { name: '重复',  subTitleColor: '#1fc8a2', rightTitle: '不重复', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
            ]}
            status={[0,]}
          />
            <ItemList
            style={styles.itemList}
            onClickBefore={this.onclickaction} //添加设备动作事件
            dataSource={[

              { name: '设备动作',  subTitleColor: '#1fc8a2', rightTitle: '电源开关-开启, 湿度 80%', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
            ]}
            status={[1,]}
          />
      </View>
    );
  }
  onclickrepeat(){
    this.props.navigation.popTo('/repeat');//跳转到重复页
  }
  onclickaction(){
     this.props.navigation.popTo('/equipment') //跳转到设备动作
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
       height: Dimensions.get('window').height,//获取页面的高度  
       backgroundColor: '#efeef1',
     },
     OptionPicker: {
       marginTop: 20,
     }, 
     itemList: {
       marginTop: 20,
     },
     
});
