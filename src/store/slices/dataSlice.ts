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
  aboutMe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a dolor arcu. Vivamus eget commodo arcu. In et sem dui. Cras ultrices erat sed pharetra malesuada. In ac viverra sapien. Suspendisse potenti. Mauris vitae lacus vitae nibh imperdiet maximus id ac mauris. Maecenas in lacus iaculis, posuere lacus ut, imperdiet quam. Fusce volutpat lacus vitae ante elementum finibus. Quisque efficitur, lacus vitae aliquet pulvinar, nunc lectus laoreet dui, at molestie ante mi eget ante. Curabitur a diam et erat vestibulum faucibus. Donec pellentesque erat consectetur erat finibus, et finibus sapien tempus. Sed eu metus mattis, viverra purus vitae, ultricies metus.",
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
