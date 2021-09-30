import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';



export default class App extends Component{
  constructor(){
    super();
    this.state = {
      val : '',
    }
  }

  call = (e) =>{
    if(e === '='){
      console.log(eval(this.state.val))
      let t = eval(this.state.val)
      this.setState({val: t})
    }
    else if(e === 'C'){
      this.setState({val:''})
    }
    else{
      this.setState({val : this.state.val + e})
      console.log(this.state.val)
    }
  }  

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.containerA}>
          <Text style={styles.txtDes}>{this.state.val}</Text>
        </View>
        <View style={styles.containerB}>
          <View style={styles.nums}>
          <TouchableOpacity onPress={()=>{this.call('1')}} style={styles.btnDes} >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDes} onPress={()=>{this.call('2')}}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDes} onPress={()=>{this.call('3')}}>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDes} onPress={()=>{this.call('4')}}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDes} onPress={()=>{this.call('5')}}>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDes} onPress={()=>{this.call('6')}}>
            <Text>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDes} onPress={()=>{this.call('7')}}>
            <Text>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDes} onPress={()=>{this.call('8')}}>
            <Text>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDes} onPress={()=>{this.call('9')}}>
            <Text>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDes} onPress={()=>{this.call('0')}}>
            <Text>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDes} onPress={()=>{this.call('C')}}>
            <Text>C</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.oprs}>
          <TouchableOpacity style={styles.btnDes} onPress={()=>{this.call('+')}}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDes} onPress={()=>{this.call('-')}}>
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDes} onPress={()=>{this.call('*')}}>
            <Text>*</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDes} onPress={()=>{this.call('=')}}>
            <Text>=</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  containerA:{
    flex:1,
    backgroundColor:'red',
    width: '100%',
    justifyContent:'flex-end',
    alignItems:'flex-end'
  },
  containerB:{
    flex:1.2,
    backgroundColor:'orange',
    width: '100%',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection:'column',
    flexWrap:'wrap',
    margin:0
  },
  btnDes:{
    backgroundColor:'pink',
    padding:30,
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent:'center',
    alignItems:'center',
    margin:5
  },
  nums:{
    width: '80%',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection:'row',
    flexWrap:'wrap',
  },
  oprs:{
    width:"20%",
    justifyContent:'center',
    alignItems: 'center',
    marginRight: -20 
  },
  txtDes:{
    color: 'white',
    fontSize: 20,
    marginRight:20,
    marginBottom:50
  }
})