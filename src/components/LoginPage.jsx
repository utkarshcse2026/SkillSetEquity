import React, { useEffect } from 'react';
import { createBrowserHistory } from 'history';

const LoginPage = () => {

    const history = createBrowserHistory();

    useEffect(() => {
      // Navigate to the desired URL when the component renders
      history.push('https://emailpasswordlogin-5e376.web.app/');
    }, [history]); // Make sure to include history as a dependency to avoid eslint warnings
  
  return (
    <div>hi</div>
  )
}

export default LoginPage;
