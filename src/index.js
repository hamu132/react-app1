import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Appコンポーネントを、HTMLのrootIDタグの中に入れている。
//ここはもういじらないのが理想
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);