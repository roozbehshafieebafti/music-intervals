import * as React from "react";
import { createRoot } from 'react-dom/client';
import App from './app';
import './assets/app.scss';


const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);