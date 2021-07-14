import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  titleBKW: {
    fontSize: 20,
    fontWeight: "600",
    color: '#333333',
    margin: 'auto'
  },
  titleInternalBWK: {
    fontSize: 16,
    fontWeight: "600",
    color: '#333333'
  },
  titleBKP: {
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
  titleInternalBKP: {
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
  containerCopyright: {
    flexDirection: "column",  
    justifyContent: 'space-between',
    flex: 3,
    alignContent: 'center',
    width: '100%', 
    marginBottom: 0,
    marginTop: '45%',
  },
  copyrightBKP: {
    /* formatação do texto de rodapé */
    color: '#FFFFFF',
    fontSize: 10,
    textAlign: 'center',
  },
  linkCopyrightBKP: {
    color: '#ffffff',
    fontSize: 10,
    textDecorationLine: 'underline',
    marginLeft: 2
  },
})