import './Navbar.css';

const Navbar = () => {
	return (
		<ul className='navbar'>
			<li className='navbar__logo'>
				<a
					rel='noopener noreferrer'
					href='https://github.com/KrlosPK/e-commerce-practice-website'
					target={'_blank'}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='icon icon-tabler icon-tabler-brand-github'
						width='40'
						height='40'
						viewBox='0 0 24 24'
						stroke='currentColor'
						fill='none'
					>
						<path
							stroke='none'
							d='M0 0h24v24H0z'
							fill='none'
						></path>
						<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
					</svg>
				</a>
			</li>
			<li className='about-me'>
				<img
					src='../static/Krlos.jpeg'
					className='about-me__img'
					alt='KrlosPK'
				/>
				<div className='container'>
					<p className='about-me__desc'>
						Hi!, I'm Krlos from Colombia and i'm practicing ReactJS
						doing this awesome project!
					</p>
					<a
						href='https://www.linkedin.com/in/carlos-morales-2720b61ba/'
						rel='noopener noreferrer'
						target='_blank'
						className='about-me__link'
					>
						Visit my LinkedIn
					</a>
				</div>
			</li>
			<li>
				<button className='open-navbar'>
					<img
						src='/static/cart-icon.png'
						alt='cart-icon'
						className='open-navbar__img'
						loading='lazy'
					/>
				</button>
			</li>
		</ul>
	);
};

export { Navbar };
