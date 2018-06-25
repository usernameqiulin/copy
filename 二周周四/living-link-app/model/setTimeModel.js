import Bone from '@bone/bone-mobile';
export default class SomeModel extends Bone.Model {
  // 初始 state
  static initialState = {
    sortingtime: [],
    sortingRepeat:[],
  };
  // actions 数据处理函数
  sortingdata() {
    console.log("设定时间的页面 model.js方法被调用")
    // return {
    //   sortingtime: this.state.value,//占位数据
    //   sortingRepeat:this.state,// 占位数据
    // };
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