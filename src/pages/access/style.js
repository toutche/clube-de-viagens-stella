import { StyleSheet } from "react-native";
import { 
  FONT_SIZE_BODY,
  HEIGHT, 
  PRIMARY_COLOR, 
  SECOND_COLOR, 
  TEXT_COLOR_BKCOLORFUL, 
  TEXT_COLOR_BKWHITE, 
  WIDTH 
} from "../../variables";

export default StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: PRIMARY_COLOR    
  },
  divIMG: {
    width: WIDTH, 
    alignContent: "stretch",
  },  
  imgBk: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 250,
  },
  div: {
    flexDirection: "column",
    justifyContent: "flex-end",
    width: WIDTH, 
    height: 300
  },
  img: {    
    height: 100,
    width: 100
  },
  img2: {
    height: 100,
    width: WIDTH
  },
  containerAccess: {
    flexDirection: "column",  
    justifyContent: "center",
    width: WIDTH,
    paddingHorizontal: 20,
    backgroundColor: PRIMARY_COLOR
  },
  inputGroup: {
    height: 50,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderColor: TEXT_COLOR_BKCOLORFUL,
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 5,    
    paddingHorizontal: 20,
    flexDirection: "row"
  }, 
  IconTextInput: {
    fontSize: FONT_SIZE_BODY,
    color: TEXT_COLOR_BKCOLORFUL,
    paddingVertical: 20,
    paddingHorizontal: 10,
    height: 100
 },
  TextInput:{
    color: TEXT_COLOR_BKCOLORFUL,
  },
  containerButtons:{
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 10,
    paddingHorizontal: 20,
    width: WIDTH,
    backgroundColor: PRIMARY_COLOR
  },
  button:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: SECOND_COLOR
  },
  buttonText: {
    color: PRIMARY_COLOR,
    fontSize: 12,
    marginHorizontal:"auto",
    textAlign: "center",
    textTransform: "uppercase",
  },  
  divLink: {
    justifyContent: "center", 
    marginVertical: 30, 
    flexDirection: "row",
    paddingHorizontal: 20,
    width: WIDTH
  }, 
  link: {
    color: TEXT_COLOR_BKCOLORFUL,
    fontSize: FONT_SIZE_BODY,
    marginLeft: 5,
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  copyright: {
    flex: 3,
    flexDirection: "column",  
    justifyContent: "flex-end",
  }
});