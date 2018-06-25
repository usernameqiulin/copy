import React, { Component } from 'react';
import { StyleSheet, View, Dimensions,ScrollView } from 'react-native';
import { ItemList  } from '@bone/bone-mobile-ui';



export default class Equipment extends Component {
constructor(...args) {
  super(...args);
this.state = {
   add: [
      { id:1, time: "2: 36 周一 周二 周三 周四 周五 周六",value:true,
        content: "加湿器-开启"},
        { id:2, time: "3: 30  周二 周三 周四 周五 周六",value:false,
        content: "冰箱-关闭"},
      ]
    }//存放数据
  this.ondy = this.ondy.bind(this);
}
  render() {

    return (
       <View style={styles.body}>
         <ScrollView style={styles.scrollBody} automaticallyAdjustContentInsets={false}>
        
               <ItemList
            style={styles.itemList}
            onItemClick={this.ondy}
            dataSource={[

              {name: '电源开关',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
              {name: '温度',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
              {name: '工作模式',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
              {name: '电源开关',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
              {name: '温度',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
              {name: '工作模式',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
              {name: '电源开关',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
              {name: '温度',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
              {name: '工作模式',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
              {name: '电源开关',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
              {name: '温度',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
              {name: '工作模式',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
              {name: '电源开关',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
              {name: '温度',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
              {name: '工作模式',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
              {name: '电源开关',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
              {name: '温度',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
              {name: '工作模式',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
            ]}
            status={[1,0,1]}
          />  
        </ScrollView>

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
        marginBottom:40,
     },
      
});
