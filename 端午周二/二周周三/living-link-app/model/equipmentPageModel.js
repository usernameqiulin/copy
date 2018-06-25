import Bone from '@bone/bone-mobile';
export default class SomeModel extends Bone.Model {
  // 初始 state
  static initialState = {
    addvalue:[],
    info:{},
  };
  // actions 数据处理函数
  addactionValue(actionValue) {
    const  actionArray = this.state.addvalue;
    actionArray.push(actionValue)
    return {
          ...this.state,
         addvalue: actionArray
         
    };
  }

 
};