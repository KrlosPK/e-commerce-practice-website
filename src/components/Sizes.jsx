import './Sizes.css';

const Sizes = () => {
	return (
		<div className='sizes'>
			<div className='sizes__title'>Sizes:</div>
			<div className='elements'>
				<button className='elements__size'>XS</button>
				<button className='elements__size'>S</button>
				<button className='elements__size'>M</button>
				<button className='elements__size'>ML</button>
				<button className='elements__size'>L</button>
				<button className='elements__size'>XL</button>
				<button className='elements__size'>XXL</button>
			</div>
		</div>
	);
};

export { Sizes };
