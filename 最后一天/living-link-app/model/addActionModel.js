import Bone from '@bone/bone-mobile';
import { APIGateway } from '@bone/living-sdk';
import  JSON  from "../app/view/value"
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
func() {
    let funcs = JSON.data.simplifyAbilityDTOs;
    
    // console.log("funcs",funcs)
     return {
       ...this.state,
       funcs,
     };
}

  async loadFunctionList(device) {
    let funcs = [];
    let flowType = 2;
    
    try {
      const ablityListRes = await APIGateway.request("/iotid/scene/ability/tsl/list", {
        version: '1.0.1',
        data: {
          iotId:"x5VcLvmbUccrHh33RbCt001015bb00",
          flowType,
        },
        authType: 'iotAuth',
      });
      if (ablityListRes.code !== '200') { 
        // log.error(ablityListRes);
        return;
      }
      funcs = ablityListRes.data.simplifyAbilityDTOs;
      // console.log("ablityListRes>>>****>>!!!", ablityListRes.data, funcs)
      // log.info('get ability list', funcs);
    } catch (e) {
      console.log("数据请求失败---加油哦!!!");
      // log.error('get ablity list or tsl error', e);
      return;
    }
    return {
      ...this.state,
      funcs,
    };
  }


};