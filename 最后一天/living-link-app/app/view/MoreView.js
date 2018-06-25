import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import {Picker,List,IconFont  } from '@bone/bone-mobile-ui';
let repeatArray;
const weekArray =["周一","周二","周三","周四","周五","周六","周日"]
let navigation=[0,0,0,0,0,0,0];
const noop = () => {};
const getNumbers = (count) => {
  const result = [];
  for (const index = 0; index < count; ++index) {
    result.push({
      value: index,
      label: index.toString(),
    });
  }
  return result;
};
export default class Time extends Component {
 state = {
    value1: [0, 0],
    value2: [15],
  };
 constructor(...args) {
   super(...args);
   this.onclickbe = this.onclickbe.bind(this)
  }
  render() {
  let {weekvlue }= this.props.timeInfo;
      // console.log(weekvlue);
  // --------------------------------------------
    repeatArray  = this.props.timeInfo.timeInfo;//获取传入的数据
   
    let weektext = "不重复";//定义一个变量
    if ( repeatArray.length >1){
      repeatArray.map((item, index) => {
        if(item == 1){
          if (weektext == "不重复") {
            weektext = "";
          }
          weektext += " " + weekArray[index];
          // console.log(weektext)
        }
      })
    }
  // --------------------------------------------
     const timevalue = this.props.timevalue;
     const { value1, value2 } = this.state;
    return (
       <View style={styles.body}>
       <Picker style={ {marginTop:20}}
          data={[getNumbers(12), getNumbers(60)]}
          value={value1}
          unit={['时', '分']}
          onChange={(...values) =>{
            
           this.setState({ value1: values })
           timevalue(this.state.value1);
          //  console.log("时间:", [number1, number2] =values)
          }
        }
        />
         <List style={styles.more}>
            <List.Item
              title="重复"
              extra={weektext}
              arrow="right"
              onPress={this.onclickbe}
            />
            </List>
      </View>
    );
  }
  onclickbe(){
    this.props.navigation.push('/repeat',{repeatArray})
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
       flex:1,
     },
     more:{
       marginTop:20,
     }
     
});
