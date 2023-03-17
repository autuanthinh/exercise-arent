import React, { useContext } from 'react';
import { AppContext } from 'context';

import { Button } from 'react-bootstrap';

function Login() {
  const { setLoggedIn } = useContext(AppContext);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Login</h1>
      <Button onClick={() => setLoggedIn?.(true)}>Click here to login</Button>
    </div>
  );
}

export default Login;
