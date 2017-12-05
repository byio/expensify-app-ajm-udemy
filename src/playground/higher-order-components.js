// Higher Order Components (HOC)

import React from 'react';
import ReactDOM from 'react-dom';

    // stateless functional component
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>Here's the info you seek: {props.info}</p>
  </div>
);

    // function that will render HOC
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please do not share!</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

    // challenge: function that will render HOC
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props}/> : <h3>Authentication Required!</h3>}
    </div>
  );
};

    // call to the function above, apssing in the wrapped component
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="INFO"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="INFO"/>, document.getElementById('app'));
