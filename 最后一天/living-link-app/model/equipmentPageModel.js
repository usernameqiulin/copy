import Bone from '@bone/bone-mobile';
export default class SomeModel extends Bone.Model {
  // 初始 state
  static initialState = {
    addvalue:[],
    actionValue:{},
// --------------------------------------------
// groupldId:null,
// enable:true,//打开或关闭
// name:null,//用户场景的名字
icon:'default', ///场景图标,
// description:[],
// triggers:{
//   uri:[],
//   params:{},

//   items:{
//     uri:[],

//     params:{
//       iotld:[],
//       status:[],
//       compareType:[],
//       compareValue:[],
//       cronType:[],
//       timezoneID:[]
//     },
//   },
// },
// actions:[],
// ----------------------------------------------
    sortingtime: [0,0],//自定义
    sortingWeek:[],//自定义
  };

  routervaluetime(routerweek){
    return{
      sortingtime:routerweek.sortingtime,
      sortingWeek:routerweek.sortingRepeat
    }
  }
  // actions 数据处理函数
  addactionValue(actionValue) {
    console.log("sss", actionValue)
    const  actionArray = this.state.addvalue;
    if (actionValue.payload.attribute && actionValue.payload.attribute === "upData"){
      actionArray.splice(actionValue.payload.index, 1, actionValue.payload)
    }else{
       actionArray.push(actionValue.payload)
       console.log(actionArray)
    }
   
    return {
          ...this.state,
         addvalue: actionArray,
         actionValue: actionValue.payload,
         
    };
  }
  // *******************************************************
  async create() {

    const payload = stateToReq(this.state);
    const res = await APIGateway.request('/scene/create', {
      version: '1.0.1',
      authType: 'iotAuth',
      protocol: 'https',
      data: {
        ...payload,
        enable: true,
      },
    });
    if (Number(res.code) !== 200) {
      throw new Error(res.message);
    }
  }

 
}
function stateToReq(state) {
  const { groupldId, enable, description, name, icon, actions } = state;

  return {
    groupldId,enable,name,icon,description,triggers,actions
  }
}