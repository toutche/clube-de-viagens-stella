import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  /* CONFIGURAÇÕES PARA PÁGINAS BACKGROUND PINK */
  container: {
    flex: 1, 
    flexDirection: "column",      
    justifyContent: 'flex-start',
    //alignContent: 'center',
    backgroundColor: "#c70c34", 
    width: '100%',
    height: '100%'
  },
  /*divRoundedWhite: {
    flex: 1, 
    backgroundColor: "#fff", 
    width: '100%',
    borderBottomStartRadius: 500, 
    borderBottomEndRadius: 500, 
    borderStyle: 'solid', 
    borderColor: '#df123e', 
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40, 
    paddingTop: 20
  },*/
  spacearea: {
    height: 180,
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
  divPink: {
    flex: 3, 
    backgroundColor: "#c70c34", 
    width: '100%', 
    height: '100%', 
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imgDivWhite: {
    resizeMode: 'center',
  },
  title: {
    color: '#FFFFFF',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 45,
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  titleInternal: {
    color: '#FFFFFF',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 'auto',
    textAlign: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
    width: '100%'
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    marginHorizontal: 'auto',
    textAlign: 'center'
  },
  textUpperCase: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 25,
    marginHorizontal: 'auto',
    textTransform: 'uppercase'
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
  },  
  link: {
    color: '#ffffff',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  containerButtons:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 10
  },
  buttonFacebook: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 130,    
    borderRadius: 25,
    backgroundColor: '#4167B2',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonGloogle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 130, 
    borderRadius: 25,
    backgroundColor: '#DF123E',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 30,
  },
  buttonRegister:{
    backgroundColor: '#FECD08',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: '100%',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonLoginEmail: {
    borderStyle: 'solid',
    borderColor: '#DF123E',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
    width: 260,  
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,    
  },
  buttonImageIcon: {
    padding: 10,
    resizeMode: 'stretch',
    marginHorizontal:'auto',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginHorizontal:'auto',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  buttonTextDark: {
    color: '#000000',
    marginHorizontal:'auto',
    fontSize: 12,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '700'
  },
  containerSeparator:{
    marginBottom: 15,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 1,
    width: 100,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
  },
  alignCenter: {
    marginHorizontal: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  boxPink: {
    paddingHorizontal: 30,
    backgroundColor: "#c70c34", 
    width: '100%', 
 },
 textOff: {
    /* formatação do texto com aparência de desabilitado */
    color: '#666666',
    fontSize: 14,
    margin: '0 auto',
    fontWeight: "600",    
    paddingBottom: 10,
    textAlign: 'left'
  },
  linkBoxWhite: {
    /* formatação do texto link */
    color: '#C11551',
    fontSize: 14,
    marginLeft: 5,
    fontWeight: "700"
  },
});