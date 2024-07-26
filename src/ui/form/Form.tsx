import { TextField } from "@mui/material";
import { FC } from "react";

const Form: FC = () => {
  return (
    <div className="m-10 flex-1">
      <div>
        <TextField id="outlined-basic" label="First Name" variant="outlined" className='w-full'/>
      </div>
    </div>
  );
};

export default Form;
