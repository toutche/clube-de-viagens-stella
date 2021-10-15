import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    margin: 0
  },
  bkRoundedpink: {
    backgroundColor: "#c70c34", 
    width: "100%",
    height: 400,
    borderBottomStartRadius: 500, 
    borderBottomEndRadius: 500, 
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  bkwhite: {
    borderStyle: "solid", 
    borderColor: "#df123e", 
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    top: -90
  },
  areaCard:{
    borderRadius: 100
  },
  areaDrop: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginTop: -20,
    marginVertical: 10
  },
  areaButtons:{
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginVertical: 5
  },
  areaTitle:{
    paddingHorizontal: 10,
    alignContent: "center",
    marginVertical: 5
  },  
  btnLeft:{
    backgroundColor:"#DF123E",
    borderColor: "#EF1F4B",
    borderWidth: 2,
    borderRightWidth: 0,
    color: "#ffffff",
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    height: 40,
    width: "50%",
  },
  btnRight:{
    backgroundColor:"#CF1038",
    borderColor: "#EF1F4B",
    borderWidth: 2,
    borderLeftWidth: 0,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    color: "#ffffff",
    height: 40,
    width: "50%"
  },
  btnText:{
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
  },
  btnUser:{
    backgroundColor:"#DF123E",
    borderColor: "#EF1F4B",
    borderWidth: 2,
    color: "#ffffff",
    borderRadius: 50,
    height: 40,
    width: "50%",
    marginRight:2
  },
  btnUserText:{
    color: "#ffffff",
    fontSize: 11,
    textAlign: "center",
    paddingVertical: 5,
  },
  btnUserText2:{
    color: "#ffffff",
    fontSize: 10,
    textAlign: "center",
    paddingVertical: 10,
  },
  btnDrop:{
    backgroundColor:"#CF1038",
    borderColor: "#EF1F4B",
    borderWidth: 2,
    borderRadius: 50,
    color: "#ffffff",
    height: 40,
    width: "50%",
    marginLeft:2
  },
  btnDropText:{
    color: "#ffffff",
    fontSize: 12,
    textAlign: "center",
    paddingVertical: 10,
  },
  information:{
    color: "#ffffff",
    fontSize: 8,
    fontWeight: "100",
    textAlign: "center"
  },
  titlePage:{
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold"
  },  
  supplementary:{
    color: "#ffffff",
    fontSize: 12,
    textAlign: "center"
  },
  bold:{
    fontWeight: "bold"
  },
  
});