import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';

import { NavLink } from 'react-router-dom';

const Navigation = props => {
	
	const { bacon } = useContext(CartContext);

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{bacon.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
