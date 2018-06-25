import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Navbar } from '@bone/bone-mobile-ui';
import Addaction from '../view/AddactionView';


const generateBackIcon = ()=>{ return (<View style={styles.buttonIconStyle} />) }
export default class AddActionPage extends Bone.Page {
  constructor(...args) {
    super(...args);

    this.onBackButtonPress = this.onBackButtonPress.bind(this);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navbar
          style={navbarStyleOptions}
          // 设置左按钮为组件
          leftButtonContent={generateBackIcon()}
          titleContent='添加动作'
          // 设置右按钮为文字
          onLeftButtonPress={this.onBackButtonPress}
        />
        <Addaction navigate={Bone.navigation} style={{ flex: 1 }}/>
      </View>
    );
  }

  onBackButtonPress() {
    console.log('onBackButtonPress');
    Bone.navigation.pop();
  }
}

// 设置导航栏的样式
const navbarStyleOptions = {
  style: { backgroundColor: '#fff' },
  titleStyle: { color: '#000'},
  marginBottom:20,
};
