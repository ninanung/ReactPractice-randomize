import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');    
ReactDOM.render(<App headerTitle="Random function" contentTitle="Number Randomize" contentBody="Let's randomize!"/>, rootElement);
