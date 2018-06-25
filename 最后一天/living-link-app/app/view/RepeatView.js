import React, { Component } from 'react';
import { StyleSheet, View, Dimensions,Text } from 'react-native';
import { Checkbox,List,IconFont } from '@bone/bone-mobile-ui';

  let arr = [];
export default class Repeat extends Component {
  constructor(...args) {
     super(...args);
     this.state = {
       value: [0, 0, 0, 0, 0, 0, 0],
          data: [
            { value: 1, title: '周一' },
            { value: 2, title: '周二' },
            { value: 3, title: '周三' },
            { value: 4, title: '周四' },
            { value: 5, title: '周五' },
            { value: 6, title: '周六' },
            { value: 7, title: '周日' },
          ],
        }
      }
        loading() {
          alert("自动加载成功")
        }
  onChange = (value) => {
          const values = [...this.state.values];
          const index = values.indexOf(value);
          if (index === -1) {
            values.push(value);
          } else {
            values.splice(index, 1);
          }
          this.setState({ values });
  };
  render() {
    const { values, data } = this.state;  //state的数据
    let listArray = values;
    return (
       <View style={styles.body}>
       <List>
            {data.map((item, index) => (
              <List.Item
                key={index}
                title={item.title}
                extra = { < Checkbox checked = {
                      this.state.value[index] === 1
                    }
                    />}
                onPress={() => {
        // -----------------------------------------------------
          const selected = this.state.value[index] === 1;
          const newValue = selected ? 0 : 1;
          this.state.value[index] = newValue;
          this.setState({
            value: this.state.value,
          });
          let listArray=this.state.value
          this.props.onClickView(listArray)
        // ----------------------------------------------------------
              }
                }
              />
            ))}
          </List>
      </View>
    );
  }
  componentWillMount() {
        const valueset = this.props.weekset;
        this.setState({
          value:valueset
    })
  }
}
  const styles = StyleSheet.create({
    repeat: {
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
});
