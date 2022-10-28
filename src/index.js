import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';

const $root = document.querySelector('#root');
const root = ReactDOM.createRoot($root);

root.render(<App />);
