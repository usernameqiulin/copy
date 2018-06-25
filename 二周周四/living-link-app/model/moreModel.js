import Bone from '@bone/bone-mobile';
import { APIGateway, logger } from '@bone/living-sdk';
import { APIGW_PATH_SCENE_ABILITY_LIST } from '../app/config/constants';
import JSON from "../app/view/value";
const log = logger('scene/model/function');

export default class FunctionModel extends Bone.Model {
  static initialState = {
    // identifier: 'LightSwitch',
    // dataType: {
    //   specs: {
    //     0: '关闭',
    //     1: '开启',
    //   },
    //   type: 'bool',
    // },
    // specs: {
    //   min: '0',
    //   unitName: '无',
    //   max: '255',  
    // },
    // type: 'int',
    // name: '主灯开关',
    isLoading: false,
  };
funcswitch(identifier) {
    let funcs = JSON.data.abilityDsl;
    let tsl = JSON.data.abilityDsl;
    let def = this.findPropertyDefination(tsl, identifier);
    // console.log("funcs",funcs,"tsl",tsl)
    return {
      ...this.state,
      isLoading: false,
      def,
    };
}
  loading() {
    return {
      ...this.state,
      isLoading: true,
    };
  }

  findPropertyDefination(tsl, identifier) {
    return tsl.properties && tsl.properties.find(prop => prop.identifier === identifier);
  }

  async loadFunction(identifier, iotId, flowType) {
    let def = {};
    try {
      const ablityListRes = await APIGateway.request('/iotid/scene/ability/tsl/list', {
        version: '1.0.1',
        data: {
          iotId,
          flowType,
        },
        authType: 'iotAuth',
      });
      if (ablityListRes.code !== '200') {
        log.error(ablityListRes);
        return {
          ...this.state,
          isLoading: false,
        };
      }
      const tsl = ablityListRes.data.abilityDsl;
      log.info('get tsl', tsl);
      def = this.findPropertyDefination(tsl, identifier);
    } catch (e) {
      log.error('get tsl error', e);
      return {
        ...this.state,
        isLoading: false,
      };
    }
    return {
      ...this.state,
      isLoading: false,
      def,
    };
  }
}
