import Bone from '@bone/bone-mobile';
export default class SomeModel extends Bone.Model {
  // 初始 state
  static initialState = {
    addvalue:[],
    info:{},
    actionValue:{},
  };
  // actions 数据处理函数
  addactionValue(actionValue) {
    console.log("sss", actionValue)
    const  actionArray = this.state.addvalue;
    if (actionValue.payload.attribute && actionValue.payload.attribute === "upData"){
      actionArray.splice(actionValue.payload.index, 1, actionValue.payload)
    }else{
       actionArray.push(actionValue.payload)
    }
   
    return {
          ...this.state,
         addvalue: actionArray,
         actionValue: actionValue.payload,
         
    };
  }

 
};