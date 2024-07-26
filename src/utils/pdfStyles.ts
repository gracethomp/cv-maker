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
    gap: 60,
    fontFamily: "Now",
    color: "#533229",
    marginBottom: 30,
  },
  leftPart: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: 30,
  },
  rightPart: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  aboutMeSection: {
    display: 'flex',
    gap: 10,
    flexDirection: 'column',
  },
  aboutMeText: {
    fontSize: 13,
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
