import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavBar } from '@bone/bone-mobile-ui';
import More from '../view/MoreView';
import Layout from '../layout';
import setTimeModel from "../../model/moreTimeModel";

const generateBackIcon = ()=>{ return (<View style={styles.buttonIconStyle} />) }
 class HomePage extends Bone.Page {
  constructor(...args) {
    super(...args);
    this.onMoreButtonPress = this.onMoreButtonPress.bind(this);
    this.state={
      timeInfo:[0,0,0,0,0,0,0],
      timeSection: "120",
    }
  }
  timevalue(timeset) {
    console.log("!!!!!!!!!!!", timeset);
    this.actions.sortingdtimeset(timeset); //setTimeModel 调用设置时间的 model
    // console.log("返回的信息", this.actions.sortingdata())
  }
  
  componentWillMouent(){
    }
  //路由传参接收
  pageDidBack(location) {
    this.setState({
      timeInfo: location.state,
    })
  }
componentWillMouent(){
}
  render() {
    const {sortingtime,sortingRepeat} = this.props;
    // console.log("modelpage", sortingtime)
    let {timeInfo} = this.state
    this.actions.sortingdweekset(timeInfo); //setTimeModel 调用设置时间的 model
    console.log(sortingRepeat);
    return (
      <View style={{ flex: 1 }}>
        <NavBar
            title="设定时间"
            left="<"
            leftStyle={{fontSize:35,color:"#7c7c7c"}}
            right="下一步"
            rightStyle={{ color: '#1fc8a2' }}
            onLeftPress={() => Bone.navigation.pop()}
            onRightPress = {
              this.onMoreButtonPress.bind(this, sortingtime, sortingRepeat)
            }
          />
        <More navigation={Bone.navigation} timeInfo={this.state} timevalue={ this.timevalue.bind(this) }  style={{ flex: 1 }}/>
      </View>
    );
  }
  onMoreButtonPress(sortingtime, sortingRepeat) {
    Bone.navigation.push('/equipment', {sortingtime, sortingRepeat});
  }
}
// 设置导航栏的样式
const navbarStyleOptions = {
  style: { backgroundColor: '#fff' },
  rightButtonStyle: { color: '#1fc8a2' },
  titleStyle: { color: '#000'},
  marginBottom:20,
};
export default Bone.connect(HomePage, setTimeModel);
