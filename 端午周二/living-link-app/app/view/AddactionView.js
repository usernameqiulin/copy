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
    // const { state } = this.state.add;
    console.log(">>>>>",funcs, this.props);
    return (
       <View style={styles.body}>
         <ScrollView style={styles.scrollBody} automaticallyAdjustContentInsets={false}>
         <List style={styles.itemList} >
         { funcs.map((item) => {
           return (
            <List.Item
            // key={item.id}
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
console.log("点击添加的事件...",item);
    this.props.navigate.push('/switch',{value:'传输的数据'}) //跳到电源开关
   

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