import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => (
  <div className="alert-wrapper">
    {alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    ))}
  </div>
);

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  // it return the alert file state which is location in reducer/alert
  // we can access there anythingn other than the whole state with ///state.alert.objectName
  // now we can recive the alert in componenet props and can access inside the component
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
