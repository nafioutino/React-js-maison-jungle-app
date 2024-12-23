import { useState } from "react";


function Cart() {
	const monsteraPrice = 8
	const [cart, updateCart] = useState(0)
	const [isOpen, setIsOpen] = useState(false)

	return isOpen ? (
		<div className="lmj-cart">
			<h2>Panier</h2>
			<div>
				Monstera: {monsteraPrice}€
				<button onClick={() => updateCart(cart + 1)}>Ajouter</button>
			</div>
			<h3>Total : {monsteraPrice * cart}€ </h3>
		</div>
	) : (
		<button onClick={() => setIsOpen(true)}> Ouvrir le Panier</button>
	)

}

export default Cart