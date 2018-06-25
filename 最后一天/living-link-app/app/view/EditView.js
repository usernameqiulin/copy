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
export default class Time extends Component {
 state = {
    value1: [6, 30],
    value2: [25],
  };
 constructor(...args) {
   super(...args);
   this.onclickbe = this.onclickbe.bind(this)
   this.onrepeat = this.onrepeat.bind(this);
   this.facility = this.facility.bind(this);
  }
  render() {
    const {navigation} = this.props.navigation
     const { value1, value2 } = this.state;
    return (
       <View style={styles.body}>
       <Picker style={ {marginTop:20}}
          data={[getNumbers(12), getNumbers(60)]}
          value={value1}
          unit={['时', '分']}
          onChange={(...values) => this.setState({ value1: values })}
        />
         <List style={styles.more}>
            <List.Item
              title="重复"
              extra="不重复"
              arrow="right"
              onPress={this.onrepeat}
            />
            </List>
             <List style={styles.more}>
            <List.Item
              title="设备动作"
              extra="电源开关-开启, 温度-80%"
              arrow="right"
              onPress={this.facility}
            />
            </List>
      </View>
    );
  }
      onrepeat(){
            
          }
      facility(){
         this.props.navigation.push('/equipment');
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
