import {
  PDFViewer,
  Document,
  Page,
  Image,
  View,
  StyleSheet,
  Text,
} from "@react-pdf/renderer";
import { FC } from "react";
import photo from "../../image/photo.png";
import { useAppSelector } from "../../hooks/redux";
import "../../utils/fontSetup";

const styles = StyleSheet.create({
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
  mainInfo: {
    display: "flex",
    flexDirection: "row",
    gap: 50,
    fontFamily: 'Now',
  },
  rightPart: {
    flex: 1,
  },
  name: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#E23459'
  },
});

const MyDocument: FC = () => {
  const firstName = useAppSelector((state) => state.dataReducer.firstName);
  return (
    <PDFViewer className="h-full flex-1">
      <Document>
        <Page size="A4">
          <View style={styles.head} />
          <View style={styles.section}>
            <View style={styles.mainInfo}>
              <View style={styles.photoSection}>
                <Image src={photo} style={styles.photo}></Image>
              </View>
              <View style={styles.rightPart}>
                <Text style={styles.name}>{firstName.toUpperCase()}</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyDocument;
