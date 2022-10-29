import './App.css';
import { Navbar } from './components/Navbar';
import { Sizes } from './components/Sizes';
import { CardContainer } from './components/CardContainer';

const App = () => {
	return (
		<>
			<Navbar />
			<div className='flexbox'>
				<Sizes />
				<CardContainer />
			</div>
		</>
	);
};

export { App };
