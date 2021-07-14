import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  /* CONFIGURAÇÕES PARA PÁGINAS BACKGROUND PINK */
  container: {
    flex: 1, 
    flexDirection: "column",      
    justifyContent: 'center',
    alignContent: 'stretch',
    //backgroundImage: 'linear-gradient(to bottom, #c50931, #c70c33, #c80e35, #ca1037, #cb1239)',
    width: '100%', 
    height: '100%',  
  },
  centerAlign: {
    flex: 1, 
    flexDirection: "row",      
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', 
    height: '100%',  
  },
  img: {
    width: 100,
    resizeMode: 'center',
    height: 50,
  },
  divRoundedWhite: {
    backgroundColor: "#fff", 
    borderRadius: 300, 
    borderWidth: 15, 
    borderStyle: 'solid', 
    borderColor: '#EEEEEE', 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 25
  },
  divRoundedPink1: {
    //backgroundImage: 'linear-gradient(to bottom, #ac092d, #ad0b2e, #ae0c2e, #ae0e2f, #af0f30)',
    borderRadius: 300, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  divRoundedPink2: {
    //backgroundImage: 'linear-gradient(to bottom, #b80a30, #b90c31, #ba0d32, #bc0f33, #bd1034)',
    borderRadius: 300, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
   },
  divRoundedPink3: {
    //backgroundImage: 'linear-gradient(to bottom, #c60a32, #c70c34, #c90e35, #ca0f37, #cb1139)',
    borderRadius: 700, 
    borderColor: '#FFFFFF', 
    borderWidth: 1, 
    borderStyle: 'solid', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
   },
  divRoundedPink4: {
    //backgroundImage: 'linear-gradient(to bottom, #c50931, #c70c33, #c80e35, #ca1037, #cb1239)',
    borderRadius: 300, 
    borderColor: '#FFFFFF', 
    borderWidth: 1, 
    borderStyle: 'solid', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
});