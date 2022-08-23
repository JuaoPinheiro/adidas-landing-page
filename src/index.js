import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './Principal/App'
import GlobalStyles from './globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
  <React.StrictMode>
    <Page />
  </React.StrictMode>
  <GlobalStyles/>
  </>
);