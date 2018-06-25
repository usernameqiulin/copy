import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Navbar } from '@bone/bone-mobile-ui';
import style from '../public/style';
import Time from '../view/TimeView';

const styles = style;

const generateBackIcon = ()=>{ return (<View style={styles.buttonIconStyle} />) }
export default class HomePage extends Bone.Page {
  constructor(...args) {
    super(...args);
    this.onBackButtonPress = this.onBackButtonPress.bind(this);
    this.onMoreButtonPress = this.onMoreButtonPress.bind(this);
    this.state={
      timeInfo:[0,0,0,0,0,0,0],
      timeSection: "120",
      // action:{}
    }
  }
  // -------------------------------路由传参---------------------------------------------
  pageDidBack(location) {
    // let location = location.state;
    // console.log("传入的参数:", location.state); //路由传参
    this.setState({
      timeInfo: location.state,
    
      
    })
  }

componentWillMouent(){
 //
}
  render() {
    let {timeInfo} = this.state
    // console.log("timeInfo>>>>>>>>>>>>>>>>>>>>>>", timeInfo)
    return (
      <View style={{ flex: 1 }}>
        <Navbar
          style={navbarStyleOptions}
          // 设置左按钮为组件
          leftButtonContent={generateBackIcon()}
          titleContent='设定时间'
          // 设置右按钮为文字
          rightButtonContent='下一步'
          onLeftButtonPress={this.onBackButtonPress}
          onRightButtonPress={this.onMoreButtonPress}
        />
        <Time navigation={Bone.navigation} timeInfo={this.state}  style={{ flex: 1 }}/>

        {/* <Time pushpage={this.pushpage} location={location}  style={{ flex: 1 }}/> */}

      </View>
    );
  }

  onBackButtonPress() {
    console.log('onBackButtonPress');
    Bone.navigation.pop();
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
