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
    padding: 0,
    marginBottom: 20,
    flexDirection: 'row',
    width: '100%',
    display:  'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    //placeholderTextColor: "#FFFFFF" 
 }, 
 TextInput: {
    paddingRight: 0,
    height: 50,
    width: '170%',
    color: '#FFFFFF',
    //placeholderTextColor:"#FFFFFF" 
 },
 IconTextInput: {
    fontSize: 14,
    color: '#FFFFFF',
    width: '30%',
 }
});