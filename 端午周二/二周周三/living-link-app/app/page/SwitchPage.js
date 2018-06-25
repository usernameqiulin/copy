import React from 'react';
import Bone from '@bone/bone-mobile';
import { IntlProvider } from '@bone/intl';
import { View, StyleSheet } from 'react-native';
import { NavBar } from '@bone/bone-mobile-ui';
import { logger } from '@bone/living-sdk';
import SwitchView from '../view/SwitchView';
import switchModel from '../../model/moreModel';
import { FLOW_TYPE_PARAMS } from '../config/constants';



class SwitchPage extends Bone.Page {
  constructor(...args) {
    super(...args);
    const { location } = this.props;
    // console.log(">>>>",location);
    const {
      iotId,
      flowType,
      functionName,
      identifier
    } = location.state;
    const flowTypeParam = FLOW_TYPE_PARAMS[flowType];



    this.actions.funcswitch(identifier); //请求 json.js文件
    this.actions.loading();




    //this.actions.loadFunction(functionName || identifier, iotId, flowTypeParam);
    this.onBackButtonPress = this.onBackButtonPress.bind(this);
    this.onMoreButtonPress = this.onMoreButtonPress.bind(this);
  }
 onSave = (data) => {
    const { location } = this.props;
    const {
      iotId,
      flow,
      functionName,
      identifier,
      productImage,
    } = location.state;
    Bone.navigation.popTo('/equipment', {
      flow,
      payload: {
        ...data,
        iotId,
        functionName: functionName || identifier,
        productImage,
      },
    });
  };
  render() { 
    return (
      <IntlProvider>
        <View style={{ flex: 1 }} >
          
          < SwitchView {...this.props} onSave={this.onSave} />
        </View>
      </IntlProvider>
    );
  }

  onBackButtonPress() {
    // console.log('onBackButtonPress');
    Bone.navigation.pop();
  }

  onMoreButtonPress() {
    Bone.navigation.popTo('/equipment'); //跳转到设备动作页(EquipmentPage)
  }
}

// 设置导航栏的样式
const navbarStyleOptions = {
  style: { backgroundColor: '#fff' },
  rightButtonStyle: { color: '#1fc8a2' },
  titleStyle: { color: '#000'},
  marginBottom:20,
};
export default Bone.connect(SwitchPage, switchModel);

