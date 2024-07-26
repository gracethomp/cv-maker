import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type DataStateType = {
  firstName: string;
};

const DataState: DataStateType = {
  firstName: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState: DataState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
  },
});

export const dataSliceActions = dataSlice.actions;

export default dataSlice.reducer;
