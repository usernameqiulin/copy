import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Picker,List  } from '@bone/bone-mobile-ui';

const noop = () => {};
const getNumbers = (count) => {
  const result = [];
  for (const index = 0; index < count; ++index) {
    result.push({
      value: index,
      label: index.toString(),
    });
  }
  return result;
};
export default class ScrollView extends Component {
 state = {
    value2: [10],
  };
 constructor(...args) {
   super(...args);
   this.onclickbe = this.onclickbe.bind(this)
  }
  render() {
    const {navigation} = this.props.navigation
     const {value2 } = this.state;
    return (
       <View style={styles.body}>
       <Picker style={ {marginTop:20}}
          data={[getNumbers(20)]} //表示数量
          value={value2}  //首次打开当前显示
          bodyHeight={80 * 5}
          lineHeight={80}
          labelStyle={{ fontSize: 36, color: '#333' }}
          frontLabelStyle={{ fontSize: 53, color: '#1fc8a2' }}
          onChange={(...values) => this.setState({ value2: values })}
        />

      </View>
    );
  }
  onclickbe(){
    // this.props.navigation.push('/repeat')
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
       flex:1,
     },
     more:{
       marginTop:20,
     }
     
});
