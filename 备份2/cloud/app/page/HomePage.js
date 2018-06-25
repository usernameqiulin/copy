import React from 'react';
import { View, StyleSheet } from 'react-native';
import Home from '../view/Home';
import { Navbar } from '@bone/bone-mobile-ui';
import style from '../public/style';
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from 'constants';

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
        <Home style={{ flex: 1 }}/>
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
  rightButtonStyle: {
    color: '#1fc8a2',
    fontSize: 35,
  },
  titleStyle: { color: '#000'},
};
