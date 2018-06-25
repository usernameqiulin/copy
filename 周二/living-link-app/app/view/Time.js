import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { OptionPicker,ItemList,IconFont  } from '@bone/bone-mobile-ui';


const getNumbers = (count) => {
  const result = [];
  for (const index = 0; index < count; ++index) {
    result.push(index.toString());
  }
  return result;
};
export default class Time extends Component {
 constructor(...args) {
    super(...args);
    this.onclickbe = this.onclickbe.bind(this)
  }
  render() {

    return (
       <View style={styles.body}>
         < OptionPicker
          style={styles.OptionPicker}
           groups = {
                [{
                    key: 'hour',
                    source: getNumbers(12),
                    idx: 6,
                    unit: '时',
                  },
                  {
                    key: 'minute',
                    source: getNumbers(60),
                    idx: 30,
                    unit: '分',
                  },
                ]
               }
              />
               <ItemList
            style={styles.itemList}
            onClickBefore={this.onclickbe} //点击重复触发方法
            dataSource={[

              { name: '重复',  subTitleColor: '#1fc8a2', rightTitle: '不重复', rightTitleColor: '#ccc', rightIcon: '&#xfc51;' },
            ]}
            status={[0,]}
          />
      </View>
    );
  }
  onclickbe(){
    this.props.navigation.push('/repeat')
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
     OptionPicker: {
       marginTop: 20,
     }, 
     itemList: {
       marginTop: 20,
     },
     
});
