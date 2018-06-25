import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavBar } from '@bone/bone-mobile-ui';
import Edit from '../view/EditView';
// import Edit from '../view/ScrollView';

const generateBackIcon = ()=>{ return (<View style={styles.buttonIconStyle} />) }
export default class EditPage extends Bone.Page {
        constructor(...args) {
          super(...args);
          this.onBackButtonPress = this.onBackButtonPress.bind(this);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
         <NavBar
            title="编辑预约"
            left="<"
            leftStyle={{fontSize:35,color:"#7c7c7c"}}
            onLeftPress={this.onBackButtonPress}
          />
        <Edit navigation={Bone.navigation} style={{ flex: 1 }}/>
      </View>
    );
  }
        onBackButtonPress() {
          // console.log('onBackButtonPress');
          Bone.navigation.pop();
        }
      }
// 设置导航栏的样式
        const navbarStyleOptions = {
          style: { backgroundColor: '#fff' },
          rightButtonStyle: { color: '#1fc8a2' },
          titleStyle: { color: '#000'},
          marginBottom:20,
        };
