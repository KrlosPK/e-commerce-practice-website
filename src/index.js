import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';

const $root = document.querySelector('#root');
const root = ReactDOM.createRoot($root);

root.render(<App />);
