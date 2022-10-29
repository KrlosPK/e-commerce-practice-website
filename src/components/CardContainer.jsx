import './CardContainer.css';
import { Card } from './Card';
import data from '../products.json';

const CardContainer = () => {
	let cardLength = 0;
	return (
		<div className='hola'>
			<div className='card-container__title'>
				{cardLength} Producto(s) encontrado(s)
			</div>
			<div className='card-container'>
				{data.map((product) => (
					<Card
						id={product.id}
						src={product.src}
						title={product.title}
						price={product.price}
						discount={product.discount}
					/>
				))}
			</div>
		</div>
	);
};

export { CardContainer };
