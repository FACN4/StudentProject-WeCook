import React, {Component} from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import moment from "moment";


class RenderDatePicker extends Component {
  state = {
    startDate: moment().add(1, 'days')
  };
  changeDate = date => {
    this.setState({
      startDate: date
    });
  };
  render () {
    const {input: {onChange: formChange}} = this.props;
    return (
      <div>
        <DatePicker
          minDate={moment()}
          maxDate={moment().add(2, "months")}

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

RenderDatePicker.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func
  })
};

export default RenderDatePicker;
