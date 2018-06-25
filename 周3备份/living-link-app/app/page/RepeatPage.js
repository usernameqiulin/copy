import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Navbar } from '@bone/bone-mobile-ui';
import style from '../public/style';
import Repeat from '../view/RepeatView';
// import setTimeModel from '../../model/setTimeModel';

const styles = style;
let weekinfo
const generateBackIcon = ()=>{ return (<View style={styles.buttonIconStyle} />) }
 class RepeatPage extends Bone.Page {
  constructor(...args) {
    super(...args);
    this.onBackButtonPress = this.onBackButtonPress.bind(this);
    this.onMoreButtonPress = this.onMoreButtonPress.bind(this);
    
  }
   componentWillMount() {  //生命周期钩子
     //通过actions调用 model 里定义的actons
     weekinfo =[];
   }

  render() {
     //modelstate 会自动映射成组件的 props
     const { week } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Navbar
          style={navbarStyleOptions}
          // 设置左按钮为组件
          leftButtonContent={generateBackIcon()}
          titleContent='重复'
          // 设置右按钮为文字
          rightButtonContent='确定'
          onLeftButtonPress={this.onBackButtonPress}
          onRightButtonPress={this.onMoreButtonPress}
        />
        <Repeat style={{ flex: 1 }} onClickView={this.onClickView} />
      </View>
    );
  }
  onClickView(params){
    console.log("params", params)
    weekinfo = params;
  }
  onBackButtonPress() {
    console.log('onBackButtonPress');
    Bone.navigation.pop();
  }

  onMoreButtonPress() {

    Bone.navigation.popTo('/more', weekinfo);
  }
}

// 设置导航栏的样式
const navbarStyleOptions = {
  style: { backgroundColor: '#fff' },
  rightButtonStyle: { color: '#1fc8a2' },
  titleStyle: { color: '#000'},
  marginBottom:20,
};
export default RepeatPage;
// export default Bone.connect(RepeatPage, setTimeModel);