# react-error-boundary-lib

A lightweight React Error Boundary component that catches JavaScript errors in child components, logs those errors, and displays a fallback UI.

## Installation

To install the package, run:

```bash
npm install react-error-boundary-lib


import React from 'react';
import ErrorBoundary from 'react-error-boundary-lib';
import Root from './Root'; // Your main component

// Define a redirect function
const redirectToHomePage = () => {
  window.location.href = '/';
};

function App() {
  return (
    <ErrorBoundary location={redirectToHomePage}>
      <Root />
    </ErrorBoundary>
  );
}

export default App;