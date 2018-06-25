import React from 'react';
import { View, StyleSheet } from 'react-native';
import Home from '../view/HomeView';
import { NavBar } from '@bone/bone-mobile-ui';


const generateBackIcon = ()=>{ return (<View style={styles.buttonIconStyle} />) }
export default class HomePage extends Bone.Page {
  constructor(...args) {
    super(...args);
    // this.onMoreButtonPress = this.onMoreButtonPress.bind(this);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavBar
            title="定时预约"
             left="<"
            leftStyle={{fontSize:35,color:"#7c7c7c"}}
            right="+"
            rightStyle={{ color: '#1fc8a2', fontSize:35, }}
            onLeftPress={() => Bone.navigation.pop()}
            onRightPress={() =>{Bone.navigation.push('/more')}}
          />
         
        <Home navigation={Bone.navigation} style={{ flex: 1 }}/>
      </View>
    );
  }

}
