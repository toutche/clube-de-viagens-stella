import {StyleSheet} from 'react-native';

export default StyleSheet.create({   
  boxWhite: {
    /* formatações das caixas de texto fundo branco */
    marginVertical: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowRadius: 3,
    shadowColor: '#333333',
    marginHorizontal: 30,
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
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#999999',
    borderWidth: 1,
    borderRadius: 25,    
    height: 50,
    backgroundColor: 'transparent',
    padding: 10,
    width: '100%',
    alignItems: 'center',
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
 searchIcon: {
    padding: 10,
},
});