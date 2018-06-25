import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavBar } from '@bone/bone-mobile-ui';
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
        const weekset = this.props.location.state.repeatArray;
        //modelstate 会自动映射成组件的 props
        const { week } = this.props;
        return (
          <View style={{ flex: 1 }}>
            <NavBar
                title="重置"
                left={style}
                right="确定"
                rightStyle={{ color: '#1fc8a2' }}
                onLeftPress={this.onBackButtonPress}
                onRightPress={this.onMoreButtonPress}
              />
            <Repeat style={{ flex: 1 }} onClickView={this.onClickView} weekset={weekset} />
          </View>
        );
      }
        onClickView(params){
          weekinfo = params;
        }
        onBackButtonPress() {
          Bone.navigation.pop();
        }
        onMoreButtonPress() { //重置按钮跳转携带参数

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