import { StyleSheet } from "react-native";

export default StyleSheet.create({
  body: {
    marginTop: 10
  },
  image: {
    width: '100%', 
    height: 300,
    borderRadius: 10,
  },
  icon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: 8,
    paddingTop: 25,
    paddingLeft: 25,
    backgroundColor: "#0c0e1e7a",
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 100,
  },
  titleBlock: {
    position: 'absolute',
    backgroundColor: "#0c0e1e7a",
    width: "100%",
    padding: 10
  },
  title: {
    color: '#fff',
    fontWeight: "400",
    fontSize: 16
  }
})