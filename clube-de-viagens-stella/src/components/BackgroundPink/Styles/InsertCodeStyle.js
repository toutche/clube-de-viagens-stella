import {StyleSheet} from "react-native";

export default StyleSheet.create({
   containerInsert: {
      flex: 1,
      flexDirection: "column",  
  },
   boxDisplayFlex: {
      flex: 1,
      flexDirection: "row",  
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginHorizontal: "auto"
   },
   inputView: {
      backgroundColor: "transparent",
      borderBottomColor: "#FFFFFF",
      borderBottomWidth: 1,    
      width: 10,    
      paddingHorizontal: 30,
      display: "flex",
      marginHorizontal: 5,
   }, 
   TextInput: {
      color: "#FFFFFF",
   }, 
});