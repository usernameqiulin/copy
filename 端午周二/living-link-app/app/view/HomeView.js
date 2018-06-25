import React, { Component } from 'react';
import { StyleSheet, View,Text, ScrollView, Dimensions,TouchableOpacity } from 'react-native';
import { Switch,List } from '@bone/bone-mobile-ui';



export default class Home extends Component {
  constructor(...args) {
      super(...args);
     this.state = {
       checks: [false, true, true, true],  //设置默认的厨师值  当获数据是可以加以判断来设置this.setState()中的数据
    result: [
      { id:1, time: "2: 36 周一 周二 周三 周四 周五 周六",value:'true',content: "加湿器-开启"},
      { id:2, time: "2: 36  周二 周三 周四 周五 周六",value:'true',content: "加热-开启"},
      { id:3, time: "2: 36  周三 周四 周五 周六",value:'false',content: "电视-开启"},
      { id:4, time: "2: 36  周四 周五 周六",value:'true',content: "空调-开启"},
      { id:5, time: "2: 36 周五 周六",value:'true',content: "洗衣机-开启"},
      { id:6, time: "2: 36  周六",value:'true',content: "冰箱-开启"},
   
  ]
}
//改变this指向
    // this.resetdata = this.resetdata.bind(this)
    // this.onTouchlogin = this.onTouchlogin.bind(this)
    this.noop = this.noop.bind(this);
  }
   onChange = (checked, index) => {
    const checks = [...this.state.checks];
    checks.splice(index, 1, !checked);
    this.setState({ checks });
  };
  render() {
        const { checks } = this.state;
    const { result } = this.state;//数据赋值给rsult
    const {navigation} = this.props.navigation;
    return (
       <View style={styles.body}>
         <ScrollView style={styles.scrollBody} automaticallyAdjustContentInsets={false}>
         <View style={styles.topboon}>
            {result.map((item,index) =>{  //遍历每一个数据
              return (
                <View style={styles.switchItem} key={item.id}>
                < List >
                    <List.Item
                      title={item.content}
                      subtitle={item.time}
                      extra={<Switch checked={checks[index]} onChange={checked => this.onChange(checked, index)} color="#1fc8a2" />}
                      actions={[
                      /*  // { text: '置顶', style: { color: '#fff', backgroundColor: '#108ee9' } }, */
                        { text: '移除', style: { color: '#fff', backgroundColor: '#f4333c' } },
                      ]}
                      actionTitle="操作"
                      actionCancelText="取消"
                      onPress={this.noop}
                    />
               </List >
            </View> 
          )})}
      </View>
    </ScrollView>
  </View>
    );
  }
  //还未实现:想法>>点击home列表跳转到编辑页面(在这里通过路由把state的数据进行传递给编辑页面,页面获取到渲染到item.index然后通过state进行设置获取到的数据)
          noop() {
            console.log("编辑事件被触发了/编辑页的跳转");
            this.props.navigation.push('/edit');
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
