import Bone from '@bone/bone-mobile';
export default class SomeModel extends Bone.Model {
  // 初始 state
  static initialState = {
    week: 10
  };

  // actions 数据处理函数
  add() {
    return {
      value: this.state.value 
    };
  }

  // 异步action
  // async getList(id) {
  //   return {
  //     value: await fetch("xxx/list", {
  //       id
  //     })
  //   }
  // }
};