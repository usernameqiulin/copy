import React from 'react';
import { View, StyleSheet } from 'react-native';
import Home from '../view/HomeView';
import { Navbar } from '@bone/bone-mobile-ui';
import style from '../public/style';

const styles = style;

const generateBackIcon = ()=>{ return (<View style={styles.buttonIconStyle} />) }
export default class HomePage extends Bone.Page {
  constructor(...args) {
    super(...args);

    this.onBackButtonPress = this.onBackButtonPress.bind(this);
    this.onMoreButtonPress = this.onMoreButtonPress.bind(this);
    
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navbar
          style={navbarStyleOptions}
          // 设置左按钮为组件
          leftButtonContent={generateBackIcon()}
          titleContent='定时预约'
          // 设置右按钮为文字
          rightButtonContent='+'
          onLeftButtonPress={this.onBackButtonPress}
          onRightButtonPress={this.onMoreButtonPress}
        />
        <Home navigate={Bone.navigation} style={{ flex: 1 }}/>
      </View>
    );
  }

  onBackButtonPress() {
    Bone.navigation.pop();
  }

  onMoreButtonPress() {
    Bone.navigation.push('/more');
  }
}

// 设置导航栏的样式
const navbarStyleOptions = {
  style: { backgroundColor: '#fff' },
  titleStyle: { color: '#000'},
  rightButtonStyle: {
    color: '#1fc8a2',
    fontSize: 35,
  },
};
