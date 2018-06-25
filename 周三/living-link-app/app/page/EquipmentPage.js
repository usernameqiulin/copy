import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Navbar } from '@bone/bone-mobile-ui';
import style from '../public/style';
import Equipment from '../view/EquipmentView';

const styles = style;

const generateBackIcon = ()=>{ return (<View style={styles.buttonIconStyle} />) }
export default class EquipmentPage extends Bone.Page {
  constructor(...args) {
    super(...args);

    this.onBackButtonPress = this.onBackButtonPress.bind(this);
    this.onMoreButtonPress = this.onMoreButtonPress.bind(this);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navbar key={110}
          style={navbarStyleOptions}
          // 设置左按钮为组件
          leftButtonContent={generateBackIcon()}
          titleContent='设备动作'
          // 设置右按钮为文字
           rightButtonContent = '完成'
          onLeftButtonPress={this.onBackButtonPress}
           onRightButtonPress={this.onMoreButtonPress}
        />
        < Equipment navigation={Bone.navigation} style = {
          {
            flex: 1
          }
        }
        />
      </View>
    );
  }

  onBackButtonPress() {
    console.log('onBackButtonPress');
    Bone.navigation.pop();
  }

  onMoreButtonPress() {

    // Bone.navigation.push('/edit');
    this.navigation.popTo('/')//全都
  }
}

// 设置导航栏的样式
const navbarStyleOptions = {
  style: { backgroundColor: '#fff' },
  rightButtonStyle: { color: '#1fc8a2' },
  titleStyle: { color: '#000'},
  marginBottom:20,
};
