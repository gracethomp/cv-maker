import {
  PDFViewer,
  Document,
  Page,
  Image,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { FC } from "react";
import photo from "../../image/photo.png";

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
    borderRadius: '100%',
  },
});

const MyDocument: FC = () => {
  return (
    <PDFViewer className="h-full flex-1">
      <Document>
        <Page size="A4">
          <View style={styles.head} />
          <View style={styles.section}>
            <View style={styles.photoSection}>
              <Image src={photo} style={styles.photo}></Image>
            </View>

          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyDocument;
