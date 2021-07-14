import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'stretch',
    width: '100%',
    height: '100%',
  },
  containerCarousel: {    
    width: '100%',
    padding: 20
  },
  top: {
    width: '100%',
    height: '60%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'stretch',
  },
  topCarrossel: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'stretch',
  },
  center: {
    width: 100,
    backgroundColor: '#F21049',
    height: 100,
    marginHorizontal: 'auto',
    top: '45%',
    borderRadius: 400
  },
  bottom: {
    width: '100%',
  },
  imgBkg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  Icon: {
    fontSize: 50,
    color: '#FFFFFF',
    margin: 'auto',
  },
  IconBtn: {
    fontSize: 20,
    color: '#666666',
  },
  buttonsLine: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonsLineRtl: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    justifyContent: 'flex-end',
  },
  hollowButtonActive: {
    borderRadius: 200,
    borderStyle: 'solid',
    borderColor: '#9942DC',
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  hollowButtonText: {
    color: '#9942DC',
    fontSize: 15,
    fontWeight: "600",
    padding: 0
  },
  linkBtnColor1Active: {
    borderRadius: 200,
    borderStyle: 'solid',
    borderColor: '#2879FF',
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  linkBtnColor1Text: {
    color: '#2879FF',
    fontSize: 15,
    fontWeight: "600",
    padding: 0
  },
  linkBtnColor2Active: {
    borderRadius: 200,
    borderStyle: 'solid',
    borderColor: '#1FE43A',
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  linkBtnColor2Text: {
    color: '#1FE43A',
    fontSize: 15,
    fontWeight: "600",
    padding: 0
  },
  linkBtnColor3: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  linkBtnColor3Text: {
    color: '#666666',
    fontSize: 15,
    fontWeight: "600"
  },
  textArea: {
    paddingHorizontal: 30,
    paddingTop: 40,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: '#333333',
    margin: 'auto'
  },
  titleInternal: {
    fontSize: 16,
    fontWeight: "600",
    color: '#333333'
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "600",
    paddingVertical: 10,
    color: '#333333'
  },
  text: {
    fontSize: 12,
    color: '#333333'
  },  
})