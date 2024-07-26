import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type DataStateType = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  aboutMe: string;
  phone: string;
  email: string;
  languages: string[];
  skills: string[];
};

const DataState: DataStateType = {
  firstName: "Olena",
  lastName: "Babii",
  jobTitle: "Junior QA Engineer",
  aboutMe: "A smart, talented, and result-oriented QA engineer looking for interesting projects to participate in.",
  phone: "+380633333333",
  email: "email@gmail.com",
  languages: ["English (B2)"],
  skills: ["HTML/CSS/Javascript", "Chrome Devtools"]
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
