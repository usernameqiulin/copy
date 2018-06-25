import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavBar } from '@bone/bone-mobile-ui';
import addActionModel  from "../../model/addActionModel"

import Addaction from '../view/AddactionView';


const generateBackIcon = ()=>{ return (<View style={styles.buttonIconStyle} />) }
  class AddActionPage extends Bone.Page {
  constructor(...args) {
    super(...args);
    this.actions.func();//调用model中的方法   数据直接从原型上获取
    this.onBackButtonPress = this.onBackButtonPress.bind(this);
  }
  // ---------------------------------------------
  componentWillMount() {

    // 通过 actions 调用 model 里定义的 actions
    // this.actions.loadFunctionList(1);
    
    
  }
  // ---------------------------------------------


  render() {
    // ------------------从原型中取数据------------------------------------
  const style = style;
    return (
      <View style={{ flex: 1 }}>
        {/* < NavBar
          style={navbarStyleOptions}
          // 设置左按钮为组件
          leftButtonContent={generateBackIcon()}
          titleContent='添加动作'
          // 设置右按钮为文字
          onLeftButtonPress={this.onBackButtonPress}
        /> */}
         <NavBar
            title="添加动作"
            left="<"
            leftStyle={{fontSize:35,color:"#7c7c7c"}}
            onLeftPress={() => Bone.navigation.pop()}
          />
        <Addaction  {...this.props}  navigate={Bone.navigation} style={{ flex: 1 }}/>
      </View>
    );
  }

  onBackButtonPress() {
    Bone.navigation.pop();
  }
}

// 设置导航栏的样式
const navbarStyleOptions = {
  style: { backgroundColor: '#fff' },
  titleStyle: { color: '#000'},
  marginBottom:20,
};
export default Bone.connect(AddActionPage, addActionModel);
