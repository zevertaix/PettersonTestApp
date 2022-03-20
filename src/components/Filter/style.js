import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "20%",
    // padding: 2,
    alignItems: "center"
  },
  list: {
    backgroundColor: "#0f101e", 
    position: "absolute", 
    top: "100%", 
    right: "0%", 
    width: "360%",
    borderRadius: 5,
    padding: 10
  },
  listLabel: {
    color: "#ffffffc7",
    fontSize: 17,
     paddingLeft: 10
  },
  listButton: {
    marginVertical: 10,
    flexDirection: "row"
  }
})