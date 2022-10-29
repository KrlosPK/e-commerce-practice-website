import './Card.css';
import { Btn } from './Btn';
import { FreeShipping } from './FreeShipping';

const Card = ({ src, title, price, discount }) => {
	let random = Math.floor(Math.random() * 10);
	return (
		<div className='product'>
			<FreeShipping></FreeShipping>
			<img className='product__img' src={src} alt='imagen' />
			<div className='product__title'>{title}</div>
			<div className='product__price'>${price}</div>
			<div className='product__discount'>
				or {random} x${discount}
			</div>
			<Btn buttonText="Añadir al carrito"></Btn>
		</div>
	);
};

export { Card };
