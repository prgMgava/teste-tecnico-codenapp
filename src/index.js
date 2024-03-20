import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SignInProvider } from './Provider';

ReactDOM.render(
  <React.StrictMode>
    <SignInProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SignInProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

