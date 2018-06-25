import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavBar } from '@bone/bone-mobile-ui';
import More from '../view/MoreView';
import Layout from '../layout';
import moreModel from "../../model/moreModel";



const generateBackIcon = ()=>{ return (<View style={styles.buttonIconStyle} />) }
export default class HomePage extends Bone.Page {
  constructor(...args) {
    super(...args);
    this.onMoreButtonPress = this.onMoreButtonPress.bind(this);
    this.state={
      timeInfo:[0,0,0,0,0,0,0],
      timeSection: "120",
    }
  }
  //路由传参接收
  pageDidBack(location) {
    this.setState({
      timeInfo: location.state,
    })
  }

componentWillMouent(){
}
  render() {
    let {timeInfo} = this.state
    return (
      <View style={{ flex: 1 }}>
        <NavBar
            title="设定时间"
            left="<"
            leftStyle={{fontSize:35,color:"#7c7c7c"}}
            right="下一步"
            rightStyle={{ color: '#1fc8a2' }}
            onLeftPress={() => Bone.navigation.pop()}
            onRightPress={this.onMoreButtonPress}
          />
        <More navigation={Bone.navigation} timeInfo={this.state}  style={{ flex: 1 }}/>
      </View>
    );
  }
  onMoreButtonPress() {
    Bone.navigation.push('/equipment');
  }
}
// 设置导航栏的样式
const navbarStyleOptions = {
  style: { backgroundColor: '#fff' },
  rightButtonStyle: { color: '#1fc8a2' },
  titleStyle: { color: '#000'},
  marginBottom:20,
};
// export default Bone.connect(EquipmentPage, EquipmentPageModel);
