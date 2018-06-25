import {StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
  // 利用旋转绘制一个返回图标。
  buttonIconStyle: {
    width: 13,
    height: 13,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    marginLeft: 2,
    borderColor: '#7c7c7c',
    transform: [{
      rotate: '-45deg',
    }, ],
  },
});