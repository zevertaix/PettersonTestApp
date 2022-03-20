import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15172d',
    paddingTop: 50,
    paddingHorizontal: 15
  },
  header: {
    color: "#fff",
    color: "#fff",
    fontFamily: "Vag-World",
    fontSize: 30,
    opacity: 0.8,
    paddingHorizontal: 15,
    lineHeight: 42,
    textAlign: "justify"
  },
  scroll: {
    marginTop: 10,
    zIndex: -1
  },
  backButton: {
    padding: 0,
    marginBottom: 20
  },
  textBackButton: {
    color: "#ffffffb8",
    textAlign: "center",
    fontSize: 30
  },
  image: {
    width: '100%', 
    height: 300,
    borderRadius: 10,
  },
  buttonsBar: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
})