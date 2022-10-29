import './CardContainer.css';
import { Card } from './Card';
import data from '../products.json';

const CardContainer = () => {
	let cardLength = 0;
	return (
		<div className='background'>
			<div className='card-container__title'>
				{cardLength} Producto(s) encontrado(s)
			</div>
			<div className='card-container'>
				{data.map((product) => (
					<Card
						key={product.id}
						src={product.src}
						src2={product.src2}
						title={product.title}
						price={product.price}
						decimalPrice={product.decimalPrice}
						discount={product.discount}
					/>
				))}
			</div>
		</div>
	);
};

export { CardContainer };
