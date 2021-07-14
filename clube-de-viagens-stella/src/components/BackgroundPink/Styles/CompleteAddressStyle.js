import {StyleSheet} from 'react-native';

export default StyleSheet.create({   
  boxWhite: {
    /* formatações das caixas de texto fundo branco */
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowRadius: 3,
    shadowColor: '#333333',
    marginHorizontal: 30,
    marginBottom: 10,
    padding: 20,
  },
  textBoxWhite: {
    /* formatação do texto normal */
    color: '#777777',
    fontSize: 14,
    margin: '0 auto',
    fontWeight: 'bold',    
    paddingBottom: 10,
  },
  inputView: {
    backgroundColor: "transparent",
    borderStyle: 'none',
    marginHorizontal: 'auto',
    marginBottom: 12,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }, 
  TextInput: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#333333',
    textAlign: 'center',
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  addressActual: {
    //borderBottom: "1px solid #dcdcdc",
    borderBottomWidth: 1,
   // borderBottomStyle: 'solid',
    borderBottomColor: '#dcdcdc',
    paddingBottom: 10,
    textAlign: 'left',
  },
  inputView: {
    backgroundColor: "transparent",
    borderRadius: 25,
    height: 40,
    color: '#999999',
    borderStyle: 'solid',
    borderColor: '#DCDCDC',
    borderWidth: 1,
    fontSize: 12,
    //outline: 'none',  
    marginBottom: 15
 }, 
 TextInput: {
   paddingVertical: 10,
   paddingHorizontal: 20,
   color: '#333333'
 },
});