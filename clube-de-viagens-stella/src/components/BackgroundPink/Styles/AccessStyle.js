import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerAccess: {
    flexDirection: "column",  
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
  },
  inputView: {
    height: 50,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 5,
    width: '100%',
    color: '#FFFFFF',
    paddingLeft: 20,
    display: 'flex'
 }, 
 inputGroup: {
  height: 50,
  backgroundColor: 'transparent',
  borderStyle: 'solid',
  borderColor: '#FFFFFF',
  borderWidth: 1,
  borderRadius: 25,
  marginBottom: 5,    
  paddingHorizontal: 20,
  flexDirection: 'row'
}, 
 TextInput:{
  color: '#FFFFFF',
 },
 IconTextInput: {
    fontSize: 14,
    color: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 10,
    display: 'flex',
    height: 100
 },
 spacearea: {
    height: 250,
    justifyContent: 'center',
    alignContent: 'center'
 },
 divRoundedWhite: {
   flex: 1,
   backgroundColor: "#fff", 
   borderBottomStartRadius: 500, 
   borderBottomEndRadius: 500, 
   borderStyle: 'solid', 
   borderColor: '#df123e', 
   justifyContent: 'flex-end',
 },
});