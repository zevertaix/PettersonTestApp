import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    width: "20%",
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
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "space-between"
  },
  backgroundList: {
    backgroundColor: "#0a0a0a66",
    position: "absolute", 
    width: WIDTH, 
    height: HEIGHT, 
    right: -15,
    top: -100,
  }
})