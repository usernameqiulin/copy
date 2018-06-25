import Bone from '@bone/bone-mobile';
export default class addActionModel extends Bone.Model {
  // 初始 state
  static initialState = {
    funcs: []
  };
// ----------------异步请求数据--------------------------------------
  async loadFunctionList(device, flowType = 0) {
    let funcs = [];
    try {
      const ablityListRes = await APIGateway.request("/scene/info/get", {
        version: '1.0.1',
        data: {
          iotId: "x5VcLvmbUccrHh33RbCt001015bb00",
          flowType,
        },
        authType: 'iotAuth',
      });
      if (ablityListRes.code !== '200') {
        //   // log.error(ablityListRes);
        return;
      }
      funcs = ablityListRes.data.simplifyAbilityDTOs;
      console.log("ablityListRes!!!", ablityListRes.data, funcs)
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