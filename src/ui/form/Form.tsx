import { TextField } from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { dataSliceActions } from "../../store/slices/dataSlice";

const Form: FC = () => {
  const dispatch = useAppDispatch();
  const firstName = useAppSelector((state) => state.dataReducer.firstName);

  return (
    <div className="m-10 flex-1">
      <div>
        <TextField
          id="first-name"
          label="First Name"
          variant="outlined"
          className="w-full"
          value={firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(dataSliceActions.setFirstName(e.target.value))
          }
        />
      </div>
    </div>
  );
};

export default Form;
