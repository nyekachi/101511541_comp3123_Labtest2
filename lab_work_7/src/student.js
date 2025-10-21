import React from "react";
import PropTypes from "prop-types";

class Student extends React.Component {
  static defaultProps = {
    lnm: "no last name",
    result: "no result",
    city: "Toronto",
  };

  render() {
    return (
      <>
        <h2>Student Information</h2>
        <p>{JSON.stringify(this.props)}</p>
        <p>Student First Name: {this.props.fnm}</p>
        <p>Student Last Name: {this.props.lnm}</p>
        <p>Student Result: {this.props.result}</p>
        <p>Student City: {this.props.city}</p>
      </>
    );
  }
}

Student.propTypes = {
  sid: PropTypes.number,
  fnm: PropTypes.string.isRequired,
  lnm: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  city: PropTypes.string,
};

export default Student;
