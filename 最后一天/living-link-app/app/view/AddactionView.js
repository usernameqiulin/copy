import React, { Component } from 'react';
import { StyleSheet, View, Dimensions,ScrollView } from 'react-native';
import { List  } from '@bone/bone-mobile-ui';



 class Equipment extends Component {
constructor(...args) {
  super(...args);
  // this.ondy = this.ondy.bind(this);
  
}


  render() {
    const { funcs } = this.props;
    console.log("funcs 输出的内容:>>>>>>>>>>>",funcs)
    // const { state } = this.state.add;
    return (
       <View style={styles.body}>
         <ScrollView style={styles.scrollBody} automaticallyAdjustContentInsets={false}>
         <List style={styles.itemList} >
         { funcs.map((item,index) => {
           return (
            <List.Item
            key={index}
             title = {item.name}
             arrow="right"
             onPress={this.ondy.bind(this,item)}
           />
          )})
        }
        </List >
            
        </ScrollView>
      </View>
    );
  }
  ondy(item){  //接收 item 中的数据
// console.log(item.name," 被触摸了!!!",'列表详情信息是:',item);
    this.props.navigate.push('/switch',{iotId:123,flowType:'action',functionName:item.name,...item,}) 
   

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
        marginBottom:40,
     },
      
});
export default Equipment;