import React, { Component } from 'react';
import { StyleSheet, View, Text,Dimensions,TouchableOpacity,ScrollView} from 'react-native';
import { List  } from '@bone/bone-mobile-ui';


const getNumbers = (count) => {
  const result = [];
  for (const index = 0; index < count; ++index) {
    result.push(index.toString());
  }
  return result;
};
export default class Equipment extends Component {
constructor(...args) {
  super(...args);

  this.onPressLearnMore = this.onPressLearnMore.bind(this)
}
  render() {
   // const upvalue = this.props.upvalue;
    const { addvalue,location } = this.props
    // try{
    //   // console.log("子组件接收跳转传参的值", upvalue)
    //   const { state } = this.props.upvalue
    //   console.log('!!!!!', state);
    // }catch(err){
    //   console.log('出现一个错误', err);
    // }
    return (
       <View style={styles.body}>
         <ScrollView style={styles.scrollBody} automaticallyAdjustContentInsets={false}>
         {
           addvalue.length !== 0 && addvalue.map((item, numbers) => {
           return (
             < List style={{marginBottom:1}} >
               < List.Item 
               key={numbers}
                title={item.functionName}
                extra={item.compareValue}
                arrow="right"
                onPress = {
                  this.onclickofon.bind(this, item, numbers)
                }
          />
          </List >
           )
         })

         }
          < TouchableOpacity onPress = {this.onPressLearnMore}>
           <View style={styles.button} >
             <Text style={{color:'#1fc8a2', fontSize:16,} }>添加动作</Text>
           </View>
           </TouchableOpacity>
           </ScrollView>
      </View>
    );
  }
  onclickofon(item, numbers) {
    // console.log(" 您点击的是第一::",index," 个数组");
    const {
      addvalue
    } = this.props
    console.log("这是一个 item", numbers)
    this.props.navigation.push('/switch', {
      ...item,
      index: numbers,
      attribute: "upData",
    }, )

  }
  onPressLearnMore(){
    this.props.navigation.push('/addaction')
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
    scrollBody:{
       marginTop: 20,
    },
     itemList: {
       marginTop: 20,
     },
      button: {
        height:55,
        backgroundColor:'#fff',
        marginTop: 20,
       marginBottom: 40,

        alignItems: 'center',
        justifyContent: 'center',
       
     },
});
