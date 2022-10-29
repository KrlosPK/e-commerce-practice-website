import './Card.css';
import { Btn } from './Btn';

const Card = () => {
	return (
		<div class='product'>
			<img src='' alt='' />
			<div className='title'></div>
			<div className='price'></div>
			<div className='discount'></div>
			<Btn />
		</div>
	);
};

export { Card };
