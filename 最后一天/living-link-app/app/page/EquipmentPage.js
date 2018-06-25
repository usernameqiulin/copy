import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavBar } from '@bone/bone-mobile-ui';
import Equipment from '../view/EquipmentView';
import EquipmentPageModel from '../../model/equipmentPageModel';


const generateBackIcon = ()=>{ return (<View style={styles.buttonIconStyle} />) }
 class EquipmentPage extends Bone.Page {
  constructor(...args) {
    super(...args);
    const routevalue = this.props.location.state;
    this.onBackButtonPress = this.onBackButtonPress.bind(this);
    this.onMoreButtonPress = this.onMoreButtonPress.bind(this);

    // console.log("接收传参:",routevalue);
    // this.actions.routervalueWeek(routevalue.sortingRepeat)
    this.actions.routervaluetime(routevalue)
    // console.log("返回取值:",this.props)
  }
pageDidBack(location) {
  const actionValue = location.state
  // console.log("传输接收到的数据是:>>>", location.state.payload)
  this.actions.addactionValue(actionValue);
 
}
onSave(){
  const { sortingtime,sortingWeekL,addactionValue } = this.props;
  this.actions.stateToReq(sortingtime,sortingWeekL,addactionValue);
}
  render() { 
   
    console.log("this.props",this.props)
    // console.log("location********8888",location)
    //const upvalue = location.state.location;
    // console.log(location.state.location," 接收路由回传的值!!!")
    

    return (
      <View style={{ flex: 1 }}>
         <NavBar
            title="设备动作"
            left="<"
            leftStyle={{fontSize:35,color:"#7c7c7c"}}
            right="完成"
            rightStyle={{ color: '#1fc8a2' }}
            onLeftPress={() => Bone.navigation.pop()}
            onRightPress={this.onMoreButtonPress}
          />
      < Equipment navigation={Bone.navigation} {...this.props} onSave={this.onSave}  style = {{flex: 1}}/>
      </View>
    );
  }

  onBackButtonPress() {
    // console.log('onBackButtonPress');
    Bone.navigation.pop();
  }

  onMoreButtonPress() {

    // Bone.navigation.push('/edit');
    this.navigation.popTo('/')
  }
}

// 设置导航栏的样式
const navbarStyleOptions = {
  style: { backgroundColor: '#fff' },
  rightButtonStyle: { color: '#1fc8a2' },
  titleStyle: { color: '#000'},
  marginBottom:20,
};
export default Bone.connect(EquipmentPage, EquipmentPageModel);

