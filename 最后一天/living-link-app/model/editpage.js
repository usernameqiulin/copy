import Bone from '@bone/bone-mobile';
export default class addActionModel extends Bone.Model {
  // 初始 state
  static initialState = {
    contentUp: []
  };
  async loadFunctionList(device, flowType = 0) {
    let contentUp = [];
    try {
      const ablityListRes = await APIGateway.request("/scene/update", {
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
      contentUp = ablityListRes.data.simplifyAbilityDTOs;
      console.log("ablityListRes!!!", ablityListRes.data, funcs)
    } catch (e) {
      console.log("数据请求失败!!!");
      return;
    }
    return {
      ...this.state,
      funcs,
    };
  }


};