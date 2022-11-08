import React, { useEffect } from "react";

const Alert = ({ type, message, removeAlert, list }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeAlert();
    }, 5000);
    return () => clearTimeout(timer);
  }, [list]);
  return <p className={`alert alert-${type}`}>{message}</p>;
};

export default Alert;