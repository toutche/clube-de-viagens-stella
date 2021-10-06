import { StyleSheet } from "react-native";
import { 
  FONT_SIZE_BODY,
  HEIGHT, 
  PRIMARY_COLOR, 
  SECOND_COLOR, 
  TEXT_COLOR_BKCOLORFUL, 
  WIDTH 
} from "../../variables";

export default StyleSheet.create({
  container: {
    flex: 2,
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
  img2: {
    height: 100,
    width: WIDTH
  },
  containerInternal: {
    flexDirection: "column",  
    justifyContent: "center",
    width: WIDTH,
    paddingHorizontal: 20
  },
  inputGroup: {
    height: 50,
    borderStyle: "solid",
    borderColor: TEXT_COLOR_BKCOLORFUL,
    borderWidth: 1,
    borderRadius: 25,
    marginVertical: 5,    
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
    width: WIDTH
  },
  button:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    borderRadius: 25,
    borderColor: TEXT_COLOR_BKCOLORFUL,
    backgroundColor: SECOND_COLOR,
    borderWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonText: {
    color: PRIMARY_COLOR,
    fontSize: FONT_SIZE_BODY,
    marginHorizontal:"auto",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold"
  },    
});