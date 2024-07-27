import {
  PDFViewer,
  Document,
  Page,
  Image,
  View,
  Text,
} from "@react-pdf/renderer";
import { FC } from "react";
import photo from "../../images/photo.png";
import phone from "../../images/phone.png";
import mail from "../../images/mail.png";
import locationIcon from "../../images/location.png";
import { useAppSelector } from "../../hooks/redux";
import "../../utils/fontSetup";
import { styles } from "../../utils/pdfStyles";

const MyDocument: FC = () => {
  const firstName = useAppSelector((state) => state.dataReducer.firstName);
  const lastName = useAppSelector((state) => state.dataReducer.lastName);
  const jobTitle = useAppSelector((state) => state.dataReducer.jobTitle);
  const phoneNumber = useAppSelector((state) => state.dataReducer.phone);
  const email = useAppSelector((state) => state.dataReducer.email);
  const location = useAppSelector((state) => state.dataReducer.location);
  const aboutMe = useAppSelector((state) => state.dataReducer.aboutMe);
  const languages = useAppSelector((state) => state.dataReducer.languages);
  const skills = useAppSelector((state) => state.dataReducer.skills);
  const workExperience = useAppSelector(
    (state) => state.dataReducer.workExperience
  );

  return (
    <PDFViewer className="h-full flex-1">
      <Document>
        <Page size="A4">
          <View style={styles.head} />
          <View style={styles.section}>
            <View style={styles.mainInfo}>
              <View style={styles.leftPart}>
                <View style={styles.photoSection}>
                  <Image src={photo} style={styles.photo}></Image>
                </View>
              </View>
              <View style={styles.rightPart}>
                <Text style={styles.name}>
                  {`${firstName} ${lastName}`.toUpperCase()}
                </Text>
                <Text>{jobTitle}</Text>
                <View style={styles.line}></View>
              </View>
            </View>
            <View style={styles.mainInfo}>
              <View style={styles.leftPart}>
                <View style={styles.labelSection}>
                  {phoneNumber && (
                    <View style={styles.label}>
                      <Image src={phone} style={styles.icon}></Image>
                      <Text>{phoneNumber}</Text>
                    </View>
                  )}
                  {email && (
                    <View style={styles.label}>
                      <Image src={mail} style={styles.icon}></Image>
                      <Text>{email}</Text>
                    </View>
                  )}
                  {location && (
                    <View style={styles.label}>
                      <Image src={locationIcon} style={styles.icon}></Image>
                      <Text>{location}</Text>
                    </View>
                  )}
                </View>
                <View style={styles.labelSection}>
                  <Text style={styles.labelTitle}>SKILLS</Text>
                  {skills.map((value) => (
                    <Text style={styles.label}>{value}</Text>
                  ))}
                </View>
                <View style={styles.labelSection}>
                  <Text style={styles.labelTitle}>LANGUAGES</Text>
                  {languages.map((value) => (
                    <Text style={styles.label}>{value}</Text>
                  ))}
                </View>
              </View>
              <View style={styles.rightPart}>
                <View style={styles.aboutMeSection}>
                  <Text style={styles.labelTitle}>ABOUT ME</Text>
                  <Text style={styles.aboutMeText}>{aboutMe}</Text>
                </View>
                <View style={styles.workSection}>
                  <Text style={styles.labelTitle}>WORK EXPERIENCE</Text>
                  <View>
                    {workExperience.map((value) => (
                      <View style={styles.workBlock}>
                        {/* <View> */}
                          {/* <View style={styles.ring}></View> */}
                          {/* <View style={styles.workLine}></View> */}
                        {/* </View> */}
                        <View>
                          <Text style={styles.jobTitlePrev}>
                            {value.jobTitle}
                          </Text>
                          <Text
                            style={styles.date}
                          >{`${value.startDate} - ${value.endDate}`}</Text>
                          <Text
                            style={styles.workPlace}
                          >{`${value.companyName} | ${value.location}`}</Text>
                          <View style={styles.responsibilityBlock}>
                            {value.responsibilities.map((resp) => (
                              <View style={styles.resp}>
                                <View style={styles.circle}></View>
                                <Text>{resp}</Text>
                              </View>
                            ))}
                          </View>
                        </View>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyDocument;
