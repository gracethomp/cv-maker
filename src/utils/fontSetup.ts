import { Font } from "@react-pdf/renderer";
import nowBoldFont from "../fonts/Now-Bold.woff";
import nowLightFont from '../fonts/Now-Light.woff';
import nowMediumFont from '../fonts/Now-Medium.woff';
import nowRegularFont from '../fonts/Now-Regular.woff';
import nowThinFont from '../fonts/Now-Thin.woff';

Font.register({
  family: "Now",
  fonts: [
    { src: nowBoldFont, fontWeight: "bold" },
    { src: nowLightFont, fontWeight: "light" },
    { src: nowMediumFont, fontWeight: "medium" },
    { src: nowRegularFont, fontWeight: "normal" },
    { src: nowThinFont, fontWeight: "thin" },
  ],
});
