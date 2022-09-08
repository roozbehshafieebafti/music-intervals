import  * as React from 'react';
import { render } from 'react-dom';
// components
import App from './assets/app';
import './assets/app.scss';

const root = document.getElementById('root') as HTMLDivElement;

render(<App />,root);
console.log("hello man")