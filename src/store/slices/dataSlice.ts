import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WorkExperience } from "../../types/workExperience";
import { Education } from "../../types/education";

type DataStateType = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  aboutMe: string;
  phone: string;
  email: string;
  location: string;
  languages: string[];
  skills: string[];
  workExperience: WorkExperience[];
  educations: Education[];
};

const DataState: DataStateType = {
  firstName: "Olena",
  lastName: "Babii",
  jobTitle: "Junior QA Engineer (Manual)",
  aboutMe:
    "A smart, talented, and result-oriented QA engineer looking for interesting projects to participate in.",
  phone: "+380633333333",
  email: "email@gmail.com",
  location: "Kyiv, Ukraine (office/remote)",
  languages: ["English (B2)"],
  skills: ["HTML/CSS/Javascript", "Chrome Devtools"],
  workExperience: [
    {
      jobTitle: "Intern Fullstack Developer",
      startDate: "August 2023",
      endDate: "October 2023",
      companyName: "Radency",
      location: "Remote",
      responsibilities: [
        "Developed a comprehensive telehealth platform",
        "Worked on frontend and backend development using React.js and Node.js, and wrote unit tests with React Testing Library and Jest",
        "Collaborated with a team of over 10 developers to build a web application",
        "Configured CI/CD pipelines using GitHub Actions",
        "Deployed the application using AWS ECS",
      ],
    },
    {
      jobTitle: "Test Automation Intern",
      startDate: "November 2022",
      endDate: "March 2023",
      companyName: "Solvd. Inc",
      location: "Remote",
      responsibilities: [
        "Created numerous automation tests for various purposes (web, API, mobile)",
        "Worked with Postman, SQL, Git, Java, Selenium, Appium, and RestAssured",
        "Recognized as one of the top students during the apprenticeship program",
      ],
    },
  ],
  educations: [
    {
      university: "National Technical University of Ukraine 'Kyiv Polytechnic Institute'​",
      field: 'Computer Science',
      startYear: 2020,
      endYear: 2024
    },
  ],
};

const dataSlice = createSlice({
  name: "data",
  initialState: DataState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setJobTitle: (state, action: PayloadAction<string>) => {
      state.jobTitle = action.payload;
    },
    setAboutMe: (state, action: PayloadAction<string>) => {
      state.aboutMe = action.payload;
    },
  },
});

export const dataSliceActions = dataSlice.actions;

export default dataSlice.reducer;
