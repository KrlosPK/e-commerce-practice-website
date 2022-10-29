import './Card.css';
import { Btn } from './Btn';
import { FreeShipping } from './FreeShipping';

const Card = ({ id, src, src2, title, price, decimalPrice, discount }) => {
	let random = Math.floor(Math.random() * 10);
	let img = 1;

	const handleFrontImage = (e) => {
		img = 2;
		e.target.src = src + img + src2;
	};

	const handleBackImage = (e) => {
		img = 1;
		e.target.src = src + img + src2;
	};

	return (
		<div className='product'>
			{random > 5 ? <FreeShipping></FreeShipping> : ''}
			<img
				className='product__img'
				onMouseEnter={handleFrontImage}
				onMouseLeave={handleBackImage}
				src={src + img + src2}
				alt={'produto ' + id}
			/>
			<div className='product__title'>{title}</div>
			<div className='product__price'>
				$ <span>{price}</span>.{decimalPrice}
			</div>
			<div className='product__discount'>
				or {random} x $<span>{discount}</span>
			</div>
			<Btn buttonText='Añadir al carrito'></Btn>
		</div>
	);
};

export { Card };
