import './App.css';
import { Navbar } from './components/Navbar';
import { Sizes } from './components/Sizes';
import { Card } from './components/Card';
// import { CardButton } from './components/CardButton';

const App = () => {
	return (
		<div>
			<Navbar />
			<div className='flexbox'>
				<Sizes />
				<Card />
			</div>
		</div>
	);
};

export { App };
