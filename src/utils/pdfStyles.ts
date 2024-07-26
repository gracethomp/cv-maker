import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  head: {
    height: 40,
    backgroundColor: "#E23459",
  },
  section: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
  },
  photoSection: {
    height: 130,
    width: 130,
  },
  photo: {
    objectFit: "cover",
    objectPosition: "top",
    borderRadius: "100%",
  },
  icon: {
    width: 15,
    height: 15,
  },
  label: {
    display: "flex",
    fontSize: 13,
    flexDirection: "row",
    gap: 5,
  },
  labelTitle: {
    fontWeight: 'bold',
  },
  labelSection: {
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  mainInfo: {
    display: "flex",
    flexDirection: "row",
    gap: 50,
    fontFamily: "Now",
    color: "#533229",
  },
  leftPart: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
  rightPart: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  name: {
    fontSize: 35,
    fontWeight: "bold",
  },
  line: {
    backgroundColor: "#533229",
    marginTop: 5,
    height: "1px",
  },
});
