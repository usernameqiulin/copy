import Bone from '@bone/bone-mobile';
import { APIGateway } from '@bone/living-sdk';

export default class SomeModel extends Bone.Model {
  // 初始 state
  static initialState = {
    sortingtime: [0,0],//自定义
    sortingRepeat:[],//自定义
  };
  // actions 数据处理函数
  sortingdtimeset(timeset) {
    // console.log("model 1被调用", timeset)
    return{
        sortingtime: timeset,
    }
  }
  sortingdweekset(weekset) {
      console.log(" model 2被调用", weekset)
      return {
        sortingRepeat: weekset,
      }
}


}
  