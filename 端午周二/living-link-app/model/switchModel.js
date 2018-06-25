import Bone from '@bone/bone-mobile';
import {
  APIGateway
} from '@bone/living-sdk';
import JSON from "../app/view/value"
export default class addActionModel extends Bone.Model {
  // 初始 state
  static initialState = {
    funcs: []
  };
  // actions 数据处理函数
  // add(num) {
  //   return {
  //     value: this.state.value+num
  //   };
  // }

  // // 异步action
  // async getList() {
  //   return {
  //     facility: await fetch("/iotid/scene/ability/tsl/list", {
  //       id
  //     })
  //   }
  // }
  switchfunc() {
    let switchfuncs = JSON.data.abilityDsl.events.outputData;

    console.log("funcs", switchfuncs)
    return {
      ...this.state,
      switchfuncs,
    };

  }

  async loadFunctionList(device) {
    let switchfuncs = [];
    let flowType = 2;

    try {
      const ablityListRes = await APIGateway.request("/iotid/scene/ability/tsl/list", {
        version: '1.0.1',
        data: {
          iotId: "x5VcLvmbUccrHh33RbCt001015bb00",
          flowType,
        },
        authType: 'iotAuth',
      });
      if (ablityListRes.code !== '200') {
        return;
      }
      switchfuncs = ablityListRes.data.abilityDsl.events.outputData;
      console.log("switchModel输出的值>>****>>!!!", ablityListRes.data.abilityDsl.events.outputData, switchfuncs)
    } catch (e) {
      console.log("数据请求失败---加油哦!!!");
      return;
    }
    return {
      ...this.state,
      switchfuncs,
    };
  }


};