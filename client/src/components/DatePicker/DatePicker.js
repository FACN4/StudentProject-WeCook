import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

const RenderDatePicker = props => {
  console.log(props);
  return (
    <div>
      <DatePicker
        {...props}
        onChange={props.onChangeFunc}
      />
    </div>
  );
};

export default RenderDatePicker;
