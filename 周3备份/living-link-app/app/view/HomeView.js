import React, { Component } from 'react';
import { StyleSheet, View,Text, ScrollView, Dimensions,TouchableOpacity } from 'react-native';
import { SwitchItem } from '@bone/bone-mobile-ui';
export default class Home extends Component {
  constructor(...args) {
      super(...args);
     this.state = {
    result: [
      { id:1, time: "2: 36 周一 周二 周三 周四 周五 周六",value:true,
        content: "加湿器-开启"},
        { id:2, time: "3: 30  周二 周三 周四 周五 周六",value:false,
        content: "冰箱-关闭"},
        { id:3, time: "4: 40  周三 周四 周五 周六",value:true,
        content: "空调-开启"},
        { id:7, time: "4: 40  周三 周四 周五 周六",value:true,
        content: "空调-开启"},
        { id:8, time: "4: 40  周三 周四 周五 周六",value:true,
        content: "空调-开启"},
        { id:4, time: "5: 50  周四 周五 周六",value:false,
        content: "电视-关闭"},
        { id:5, time: "12: 36  周五 周六",value:true,
        content: "洗衣机-开启"},
         { id:6, time: "8: 40  周五 周六",value:true,
        content: "窗帘-开启"},
  ]
}
//改变this指向
    // this.resetdata = this.resetdata.bind(this)
    this.onTouchlogin = this.onTouchlogin.bind(this)
  }
  render() {
    const { result } = this.state;//数据赋值给rsult
    return (
       <View style={styles.body}>
         <ScrollView style={styles.scrollBody} automaticallyAdjustContentInsets={false}>
         <View style={styles.topboon}>
        {result.map(item =>{  //遍历每一个数据
          return (
            
          <SwitchItem
            style={styles.switchItem}
            key={item.id}
             value={item.value}
             changed={this.onTouchlogin}
           
            themeColor = "#1fc8a2"
            title={item.time}//主标题
            subTitle={item.content}//副标题
          />
         
          
        )})}
        </View>
        </ScrollView>
      </View>
    );
  }
  //请求数据
  // componentDidMount() {
  //   fetch('http://www.abc.com/api.index.json')
  //     .then((res) => res.json)
  //     .then(this.resetdata)
  //     .catch(() =>{alert('请求数据异常')})
  // }
  // resetdata(res){
  //   if(res.time && res.content){
  //     this.setState({
  //       result:res.data.result
  //     })
  //   }
  // }



/*   < TouchableOpacity onLongPress = {this.onTouchlogin} >
        <View >
             <Text style = {{color: '#1fc8a2',fontSize: 16,}} > 长按触发测试< /Text> 
        </View> 
    </TouchableOpacity> */

    
  onTouchlogin(value){
    alert(value)
    // alert('开关被触发!!!')
  }


}
const styles = StyleSheet.create({
  home: {
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
  scrollBody: {
    flex: 1,
  },
    switchItem:{
       marginBottom:1,
       
     },
     topboon:{
       marginTop: 20,
       marginBottom: 40,
     }
    
});
