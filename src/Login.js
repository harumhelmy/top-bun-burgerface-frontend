import React from "react";

const Login = props => {
  return (
     <div>
 
       { !props.currentPlayer ?
      <form onSubmit={props.onLogin}>
        <h1><label>Login:</label></h1>
        <input
          type="text"
          value={props.loginName}
          onChange={props.getLoginName}
        />
        <button>Submit</button>
      </form>
     : null}
     </div>
    )
};

export default Login;
