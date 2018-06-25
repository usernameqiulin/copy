import React, { Component } from 'react';
import { StyleSheet, View, Text,Dimensions,TouchableOpacity} from 'react-native';
import { ItemList  } from '@bone/bone-mobile-ui';


const getNumbers = (count) => {
  const result = [];
  for (const index = 0; index < count; ++index) {
    result.push(index.toString());
  }
  return result;
};
export default class Equipment extends Component {
constructor(...args) {
  super(...args);

  this.onclickofon = this.onclickofon.bind(this)
  this.onPressLearnMore = this.onPressLearnMore.bind(this)
}
  render() {

    return (
       <View style={styles.body}>
               <ItemList
            style={styles.itemList}
            onClickBefore={this.onclickofon} //点击电源开关触发方法 (设备动作)
            dataSource={[
                  { name: '电源开关',  subTitleColor: '#1fc8a2', rightTitle: '关闭', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
            ]}
                status={[0,]}
          />
          < TouchableOpacity onPress = {this.onPressLearnMore}>
           <View style={styles.button} >
             <Text style={{color:'#1fc8a2', fontSize:16,} }>添加动作</Text>
           </View>
           </TouchableOpacity>
      </View>
    );
  }
  onclickofon(){
    this.props.navigation.push('/switch');
  }
  onPressLearnMore(){
    this.props.navigation.push('/addaction')
  }
}

const styles = StyleSheet.create({
  time: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
   body: {
       height: Dimensions.get('window').height,
       backgroundColor: '#efeef1',
     }, 
     itemList: {
       marginTop: 20,
     },
      button: {
        height:55,
        backgroundColor:'#fff',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
       
     },
});
