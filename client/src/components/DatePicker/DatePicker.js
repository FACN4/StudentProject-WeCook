import React, {Component} from "react";
import DatePicker from "react-datepicker";
import moment from "moment";


class RenderDatePicker extends Component {
  state = {
    startDate: moment()
  };
  changeDate = date => {
    console.log(date);
    this.setState({
      startDate: date
    });
  };
  render () {
    const {input} = this.props;
    const formChange = input.onChange;
    return (
      <div>
        <DatePicker
          customInput=<input className='date-picker-home'/>
          dateFormat="DD/MM/YYYY"
          onChange={(date) => {
            this.changeDate(date)
            formChange(date)
          }}
          selected={this.state.startDate}
        />
      </div>
    );
  }
}

export default RenderDatePicker;
